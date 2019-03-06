const request = require('request');
const geocode = require('./utils/geocode.js');

const url = 'https://api.darksky.net/forecast/77bb2bfa7a3d8d204021a7de87ff8f1e/37.8267,-122.4233';

// request({ url: url, json: true }, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to waether service!')
//     } else if (response.body) {
//         console.log('Unable to find location')
//     } else {
//         const temp = response.body.currently.temperature
//         const rainChance = response.body.currently.precipProbability
//         console.log(`${response.body.daily.data[0].summary} It is current ${temp} degrees out. There is a ${rainChance}% chance of rain.`);
//     }
// });

// const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiemFuZWNhbXBiZWxsIiwiYSI6ImNqc3VzZjZhZDFreTQzeXBhcmNxb2Z2bmsifQ.YSsGUrJLZIqfqasi1Dlz7Q&limit=1'

// request({ url: geocodeURL, json: true }, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to location service!')
//     } else if (response.body.features.length === 0) {
//         console.log('Unable to find location!')
//     } else {
//         const latitude = response.body.features[0].center[0]
//         const longitude = response.body.features[0].center[1]
//         console.log(latitude, longitude);
//     }
// });

geocode('Seattle', (error, data) => {
    console.log('Error', error);
    console.log('Data', data);
});














// mapbox key = pk.eyJ1IjoiemFuZWNhbXBiZWxsIiwiYSI6ImNqc3VzZjZhZDFreTQzeXBhcmNxb2Z2bmsifQ.YSsGUrJLZIqfqasi1Dlz7Q