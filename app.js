const request = require('request');

const url = 'https://api.darksky.net/forecast/77bb2bfa7a3d8d204021a7de87ff8f1e/37.8267,-122.4233';

request({ url }, (error, response) => {
    const data = JSON.parse(response.body);
    console.log(data.currently);
});