const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hello premier league')
})

app.listen(3000)
