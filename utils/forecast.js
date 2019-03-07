const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = `https://api.darksky.net/forecast/77bb2bfa7a3d8d204021a7de87ff8f1e/${latitude},${longitude}`

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to forecast services!', undefined)
        } else if (response.body.error) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            const temp = response.body.currently.temperature
            const rainChance = response.body.currently.precipProbability
            const summary = response.body.daily.data[0].summary
            callback(undefined, `${summary} It is current ${temp} degrees out. There is a ${rainChance}% chance of rain.`)
        }
    })   
}

module.exports = forecast;