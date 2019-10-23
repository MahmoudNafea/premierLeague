const express = require('express')
const request = require('request')
const app = express()

const BASE_URL = process.env.BASE_URL
const LEAGUE_ID = process.env.LEAGUE_ID
const API_KEY = process.env.API_KEY

app.get('/', (req, res) => {
    res.send('Hello premier league')
})

app.get('/table', (req, res) => {
    const url = `${BASE_URL}?action=get_standings&league_id=${LEAGUE_ID}&APIkey=${API_KEY}`
    request(url, (error, body) => {
        res.send(JSON.parse(body.body))
    })
})

app.listen(process.env.PORT || 3000)
