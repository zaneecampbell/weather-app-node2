const geocode = require('./utils/geocode.js');
const forecast = require('./utils/forecast.js');

const address = process.argv[2];

if (!address) {
    console.log('Please provide an address')
} else {
    geocode(address, (error, data) => {
        if (error) {
            return console.log(error);
        }
    
        forecast(data.latitude, data.longitude, (error, forecastData) => {
            if (error) {
                return console.log(error);
            }
    
            console.log(data.location);
            console.log(forecastData);
        });
    });
}

// mapbox key = pk.eyJ1IjoiemFuZWNhbXBiZWxsIiwiYSI6ImNqc3VzZjZhZDFreTQzeXBhcmNxb2Z2bmsifQ.YSsGUrJLZIqfqasi1Dlz7Q