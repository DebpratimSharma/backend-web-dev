const catMe = require('cat-me')

//

const http = require('http')

const server = http.createServer((req, res) =>{
    console.log(catMe());
    res.end(catMe())
})

server.listen(3000)