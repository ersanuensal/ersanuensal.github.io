var $status = document.getElementById('status');

if ('Notification' in window) {
    $status.innerText = Notification.permission;
}

function requestPermission() {
    if (!('Notification' in window)) {
        alert('Notification API not supported!');
        return;
    }

    Notification.requestPermission(function (result) {
        $status.innerText = result;
    });
}

function nonPersistentNotification() {
    if (!('Notification' in window)) {
        alert('Notification API not supported!');
        return;
    }

    try {
        var notification = new Notification("Hi there - non-persistent!");
    } catch (err) {
        alert('Notification API error: ' + err);
    }
}

function persistentNotification() {
    if (!('Notification' in window) || !('ServiceWorkerRegistration' in window)) {
        alert('Persistent Notification API not supported!');
        return;
    }

    try {
        navigator.serviceWorker.getRegistration()
            .then((reg) => reg.showNotification("Hi there - persistent!"))
            .catch((err) => alert('Service Worker registration error: ' + err));
    } catch (err) {
        alert('Notification API error: ' + err);
    }
}

var idleDetector;

function handleIdleChange() {
    const timeBadge = new Date().toTimeString().split(' ')[0];
    const newState = document.createElement('p');
    const {
        user,
        screen
    } = idleDetector.state;
    newState.innerHTML = '' + timeBadge + ' User idle status changed to ' + user + '. Screen idle status changed to ' + screen + '.';
    target.appendChild(newState);
}

function startDetector() {
    if (!window.IdleDetector) {
        alert("Idle Detection API is not available");
        return;
    }

    const target = document.getElementById('target');

    try {
        idleDetector = new IdleDetector({
            threshold: 60
        });
        idleDetector.addEventListener('change', handleIdleChange);
        idleDetector.start();
    } catch (e) {
        alert('Idle Detection error:' + e);
    }
}