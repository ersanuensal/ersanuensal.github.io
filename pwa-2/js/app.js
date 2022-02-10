function getUserMedia(options, successCallback, failureCallback) {
    var api = navigator.getUserMedia || navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia || navigator.msGetUserMedia;
    if (api) {
        return api.bind(navigator)(options, successCallback, failureCallback);
    }
}

var theStream;
var theRecorder;
var recordedChunks = [];

function getStream() {
    if (!navigator.getUserMedia && !navigator.webkitGetUserMedia &&
        !navigator.mozGetUserMedia && !navigator.msGetUserMedia) {
        alert('User Media API not supported.');
        return;
    }

    var constraints = {
        video: true,
        audio: true
    };
    getUserMedia(constraints, function (stream) {
        var mediaControl = document.querySelector('video');

        if ('srcObject' in mediaControl) {
            mediaControl.srcObject = stream;
        } else if (navigator.mozGetUserMedia) {
            mediaControl.mozSrcObject = stream;
        } else {
            mediaControl.src = (window.URL || window.webkitURL).createObjectURL(stream);
        }

        theStream = stream;
        try {
            recorder = new MediaRecorder(stream, {
                mimeType: "video/webm"
            });
        } catch (e) {
            console.error('Exception while creating MediaRecorder: ' + e);
            return;
        }
        theRecorder = recorder;
        console.log('MediaRecorder created');
        recorder.ondataavailable = recorderOnDataAvailable;
        recorder.start(100);
    }, function (err) {
        alert('Error: ' + err);
    });
}

function recorderOnDataAvailable(event) {
    if (event.data.size == 0) return;
    recordedChunks.push(event.data);
}

function download() {
    console.log('Saving data');
    theRecorder.stop();
    theStream.getTracks()[0].stop();

    var blob = new Blob(recordedChunks, {
        type: "video/webm"
    });
    var url = (window.URL || window.webkitURL).createObjectURL(blob);
    var a = document.createElement("a");
    document.body.appendChild(a);
    a.style = "display: none";
    a.href = url;
    a.download = 'test.webm';
    a.click();

    // setTimeout() here is needed for Firefox.
    setTimeout(function () {
        (window.URL || window.webkitURL).revokeObjectURL(url);
    }, 100);
}

function takePhoto() {
    if (!('ImageCapture' in window)) {
        alert('ImageCapture is not available');
        return;
    }

    if (!theStream) {
        alert('Grab the video stream first!');
        return;
    }

    var theImageCapturer = new ImageCapture(theStream.getVideoTracks()[0]);

    theImageCapturer.takePhoto()
        .then(blob => {
            var theImageTag = document.getElementById("imageTag");
            theImageTag.src = URL.createObjectURL(blob);
        })
        .catch(err => alert('Error: ' + err));
}

function saveImgToGallery() {
    imageToSave = document.getElementById("imageTag");
    var img64 = getBase64Image(imageToSave);


    localStorage.setItem("img64", img64);

}

function getBase64Image(img) {
    var canvas = document.createElement("canvas");
    canvas.width = 400;
    canvas.height = 300;

    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0, 400, 300);

    var dataURL = canvas.toDataURL("image/png");

    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
}

var dataImage = localStorage.getItem('img64');
imgLoad = document.getElementById("imageTag");
if (dataImage != null) {
    imgLoad.src = "data:image/png;base64," + dataImage;
} else {
    imgLoad.src = "img/no-image.png";
}