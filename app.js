const http = require('http');

const server = http.createServer((req, res) => {
    res.end("Hello from DevOps Project New Version, webhook added deploying to server on aws");

});

server.listen(3000, () => {
    console.log("Server running on port 3000");
});
