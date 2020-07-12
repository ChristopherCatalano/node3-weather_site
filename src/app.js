const path = require('path')

// express function called to createa  new express application 
const express = require('express')
const hbs = require('hbs', )

//serve up JS utils
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

//call express to start app
const app = express()

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
        name: 'Andrew Mead',
        errorMessage: 'Help article not found.'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Andrew Mead',
        errorMessage: 'Page not found.'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})














// //render a handlebar template.
// app.get('', (req, res) => {
//     res.render('index', {
//         title:'Weather App',
//         name: ' Chris Cat'
//     })
// })

// app.get('/about', (req, res) => {
//     res.render('about', {
//         title: 'About Me',
//         name: 'Chris CatZ'
//     })
// })


// app.get('/weather', (req, res) => {
//     if(!req.query.address){
//         return res.send({
//             error: 'you must provide an address'
//         })
//     }


//     geocode(req.query.address, (error, latitude, longitude) =>{
//         if(error){
//             return res.send({ error })
//         }

//         forecast(latitude, longitude, (error, forecastData) => {
//             if (error){
//                 return res.send({ error })
//             }

//             res.send({
//                 forecast: forecastData,
//                 location,
//                 address: req.query.address
//             })
//         })
//     })
// })


// app.get('/products', (req, res) => {
//     if(!req.query.search){
//         return res.send({
//             error: 'you must provide search'
//         })
//     }


//     console.log(req.query)
//     res.send({
//         products: []
//     })
// })
// app.get('/help', (req, res) => {
//     res.render('help', {
//         message:'There is currently an issue',
//         title: 'Help',
//         name: 'ChrisCat'
//     })
// })

// app.get('/help/*',(req, res) => {
//     res.render('404', {
//         title: 'Missing Help',
//         message: 'Help article not found'
//     })
// })

// app.get('*', (req, res) => {
//     res.render('404', {
//         title: '404',
//         message: 'Page not found'
//     })
// })
// // spin up sever to listen on port
// app.listen(3000, () => {
//     console.log('Server up!!! Port 3000')
// })











//setup method to detrmine what a resource should do
//function to run when it '' arg 
// req = request res = resposne 

// app.get('', (req, res) => {
//     // send something back to requestor 
//     res.send('<h1>Hello express!</h1>')
// })

// app.get('/help',(req, res) => {
//     res.send([{
//         product: 'tester'
//     }, {
//         product: 'tester2'
//     }])
// })

// app.get('/about', (req, res) => {
// //     res.send('<h1>ABOUT</h1>')
// // })

// //just need to see text in browser

// app.get('/weather', (req, res) => {
//     res.send([{
//         forecast: 'Weather forecast'
//     }, {
//         location: 'LOCATION!'
//     }])
// })



