// Registration of the Service Worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        navigator.serviceWorker.register('/serviceWorker.js').then(function (registration) {
            // Registration was successful
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }, function (err) {
            // registration failed :(
            console.log('ServiceWorker registration failed: ', err);
        });
    });
}


var costList = new Array();



function addData() {
    getData();
    costList.push({
        description: document.getElementById('description').value,
        date: document.getElementById('date').value,
        category: document.getElementById('category').value,
        value: document.getElementById('value').value
    });

    localStorage.setItem('localData', JSON.stringify(costList));
    showData();
    console.log("New Item added");
}

function getData() {
    var data = localStorage.getItem('localData');

    if (data != null) {
        costList = JSON.parse(data);
    }
}



function showData() {
    getData();


    var table = document.getElementById('costTable');

    var tableLength = table.rows.length;

    while (--tableLength) {
        table.deleteRow(tableLength);
    }

    var sum = 0;

    costList.forEach(element => {
        var row = table.insertRow();
        var cell1 = row.insertCell();
        var cell2 = row.insertCell();
        var cell3 = row.insertCell();
        var cell4 = row.insertCell();
        var cell5 = row.insertCell();

        // Add costs to sum
        rawValue = element.value
        value = parseFloat(rawValue.replace(',', '.'));
        sum = sum + value;

        cell1.innerHTML = element.description;
        cell2.innerHTML = new Date(element.date).toLocaleDateString();
        cell3.innerHTML = element.category;
        cell4.innerHTML = element.value + " €";
        cell5.innerHTML = sum.toFixed(2) + " €";
    });
}

function deleteData() {
    localStorage.clear();
    showData();
}

showData();