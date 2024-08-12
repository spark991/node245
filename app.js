//import the http module
const http = require ('http');

const server = http.createServer((req, res) => {
    if (req.url === '/'  && req.method === 'GET'){
        res.end('welcome to homepage');
    }
    else if (req.url === '/about' && req.method === 'GET') {
        res.end('this is about us page');
    }
    else if (req.url === '/service' && req.method === 'GET') {
        res.end('this is services page');
    }
    else{
        res.end('page not found')
    }
})

const port = 5000;

    server.listen(port, () => {
        console.log(`server running at http://localhost:${port}/`)

    })

