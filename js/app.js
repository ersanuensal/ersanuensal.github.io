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

let myObj = {
    name: 'John',
    age: 30,
    city: 'New York'
};

localStorage.setItem('myObj', JSON.stringify(myObj));
console.log(localStorage)