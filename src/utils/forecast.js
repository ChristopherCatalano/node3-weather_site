const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=11dbee1cceb4f03618dcde98993b61a9&query=' + encodeURIComponent(latitude) + ',' + encodeURIComponent(longitude) + '&units=f'

    
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.success === false) {
            callback(body, undefined)
        } else {
            callback(undefined, "Currently it's " + body.current.weather_descriptions + ' and a temperature of ' + body.current.temperature + 
            ' current wind speed is ' + body.current.wind_speed + ' MPH out of the ' + body.current.wind_dir)
        }
    })
}
module.exports = forecast

