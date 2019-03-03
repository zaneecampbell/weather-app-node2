const request = require('request');

const url = 'https://api.darksky.net/forecast/77bb2bfa7a3d8d204021a7de87ff8f1e/37.8267,-122.4233';

request({ url: url, json: true }, (error, response) => {
    const temp = response.body.currently.temperature
    const rainChance = response.body.currently.precipProbability
    console.log(`${response.body.daily.data[0].summary} It is current ${temp} degrees out. There is a ${rainChance}% chance of rain.`);
});