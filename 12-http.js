const http = require('http')

const server = http.createServer((req, res)=> {
    if(req.url === '/') {
        res.end('Welcome to your Homepage')
    }
    if(req.url === '/about') {
        res.end('Welcome to the about page')
    }
    res.end('Oops! Page not Found')
})

server.listen(3000)