console.log('client side java script file is loaded');

const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const locationMsg = document.querySelector('#location');
const forecastMsg = document.querySelector('#forecast');

weatherForm.addEventListener('submit', (event) => {
    event.preventDefault();

    locationMsg.textContent = 'Loading...';
    forecastMsg.textContent = '';

    fetch('/weather?address=' + search.value).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                locationMsg.textContent = data.error;
            } else {
                locationMsg.textContent = 'Weather forecast for '+data.location;
                forecastMsg.textContent = data.forecast;
            };

        });
    });

});