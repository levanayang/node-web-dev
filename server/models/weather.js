const request = require('request-promise');

// for an api key to interact with weather api
const API_KEY = '00ab3b20f10d5adc2e9e456e9a145210';

class Weather {
    static retrieveByCity(city, callback) {
        request({
            uri: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`,
            json: true
        }).then((res) => {
            callback(res);
        }).catch((err) => {
            console.log(err);
            callback({ error: 'Could not reach OpenWeatherMap API.'});
        });
    }
}

module.exports = Weather;