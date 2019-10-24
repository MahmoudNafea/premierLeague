const express = require('express')
const request = require('request')
const path = require('path')
const hbs = require('hbs')
const app = express()

const BASE_URL = process.env.BASE_URL
const LEAGUE_ID = process.env.LEAGUE_ID
const API_KEY = process.env.API_KEY

//setting the paths for express
const clientDirectoryPath = path.join(__dirname, '../client')
const viewsPath = path.join(__dirname, '../templates/views')

//setup handlebars engine and views handlebars
app.set('view engine', 'hbs')
app.set('views', viewsPath)

//setup static directory to serve
app.use(express.static(clientDirectoryPath))


app.get('/', (req, res) => {
    res.render('index', {
        name: "Nefo"
    })
})

app.get('/table', (req, res) => {
    const url = `${BASE_URL}?action=get_standings&league_id=${LEAGUE_ID}&APIkey=${API_KEY}`
    request(url, (error, body) => {
        if (error) res.status(404).send()
        res.send(JSON.parse(body.body))
    })
})

app.listen(process.env.PORT || 3000)
