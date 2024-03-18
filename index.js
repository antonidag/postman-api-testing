const express = require('express')
const basicAuth = require('express-basic-auth')
const app = express()
const port = 8080


app.use(basicAuth({
    users: { 'admin': 'supersecret' }
}))

app.get('/time', (req, res) => {
    res.set('Content-Type', 'application/json');
    res.set('Access-Control-Allow-Methods', 'GET');
    res.set('X-Content-Type-Options', 'nosniff');
    res.set('Cache-Control', 'no-cache');
    res.send({
        currentTime: new Date().toISOString()
    })
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})