const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === "/") {
        res.write("Hi");
        res.end();
    }
    if(req.url === "/lmao") {
        res.write("SIMBA SIMBA SIMBA");
        res.end();
    }
    if(req.url === "/contact") {
        res.setHeader("Content-Type", "text/html");
        res.write("<h1> Contact me on insta sss_soham makad</h1>");
        res.end();
    }
});

// Web Server
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`🔥 Listening on Port ${PORT}`);
});