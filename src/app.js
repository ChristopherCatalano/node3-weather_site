const path = require('path')

// express function called to createa  new express application 
const express = require('express')
const hbs = require('hbs', )

//serve up JS utils
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

//call express to start app
const app = express()

// set port based on Heroku value, or 3000 if not found
const port = process.env.PORT || 3000

// serve up the public directory 
const publicDirectoryPath = path.join(__dirname, '../public')

//set views path for handlebars unique folder.
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

//handle bars will allow us to create dynamic pages
// requires a spec folder 'views'
app.set('view engine','hbs')
app.set('views', viewsPath )
hbs.registerPartials(partialsPath)


// setup static directory to serve
app.use(express.static(path.join(publicDirectoryPath)))


app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'ChrisCat'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'ChrisCat'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        helpText: 'This is some helpful text.',
        title: 'Help',
        name: 'ChrisCat'
    })
})

app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: 'You must provide an address!'
        })
    }

    geocode(req.query.address, (error, { latitude, longitude, location } = {}) => {
        if (error) {
            return res.send({ error })
        }

        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return res.send({ error })
            }

            res.send({
                forecast: forecastData,
                location,
                address: req.query.address
            })
        })
    })
})

app.get('/products', (req, res) => {
    if (!req.query.search) {
        return res.send({
            error: 'You must provide a search term'
        })
    }

    console.log(req.query.search)
    res.send({
        products: []
    })
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'ChrisCat',
        errorMessage: 'Help article not found.'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'ChrisCat',
        errorMessage: 'Page not found.'
    })
})

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})