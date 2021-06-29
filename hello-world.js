const http = require('http')

const port = process.env.PORT || 1337

const server = http.createServer(function (req, res) {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({message: 'Hi!'}))
})

server.listen(port, function () {
    console.log(`Server listening on port ${port}`)
})