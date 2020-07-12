const request = require('postman-request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ address +'.json?access_token=pk.eyJ1IjoicmF3cmJpZ2NhdCIsImEiOiJja2NkbXczc2YwMDBzMnJsY2s3c3d4azVuIn0.4nP8m5hc9NL7RF4JT-VAJw&limit=1'

    request({ url, json: true }, (error, { body } = {}) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}


module.exports = geocode


// 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ address +'.json?access_token=pk.eyJ1IjoicmF3cmJpZ2NhdCIsImEiOiJja2NkbXczc2YwMDBzMnJsY2s3c3d4azVuIn0.4nP8m5hc9NL7RF4JT-VAJw&limit=1'