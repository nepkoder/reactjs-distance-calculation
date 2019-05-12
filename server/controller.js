const http = require('http');
const url = require('url');

module.exports = http.createServer((req, res) => {

    var service = require('./service.js');
    const reqUrl = url.parse(req.url, true);

    // POST Endpoint
    if (reqUrl.pathname == '/distance/' && (req.method === 'POST')) {
        service.postRequest(req, res);

    } else {
        service.invalidRequest(req, res);
    }
});