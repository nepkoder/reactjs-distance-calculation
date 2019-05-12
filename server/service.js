const url = require('url');

exports.postRequest = function (req, res) {
    body = '';

    req.on('data', function (chunk) {
        body += chunk;
    });

    req.on('end', function () {

        postBody = JSON.parse(body);

        fromObj = postBody.from;
        toObj = postBody.to;

        var response = {
            "distance": haversine_distance(fromObj, toObj)
        };

        res.statusCode = 200;
        // res.setHeader('Content-Type', 'application/json');
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        // res.setHeader('Access-Control-Allow-Credentials', 'true');

        // res.write(JSON.stringify(response));
        // res.end();
        res.end(JSON.stringify(response));
        // res.end(JSON.stringify({
        //     status: 'success',
        //     response
        // }, null, 3));
        // console.log(res);
    });


    // haversine formula
    function haversine_distance(coords1, coords2) {

        function toRad(x) {
            return x * Math.PI / 180;
        }

        var R = 6371;

        var dLat = toRad(coords2.lat - coords1.lat);
        var dLon = toRad(coords2.lon - coords1.lon);

        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(toRad(coords1.lat)) *
            Math.cos(toRad(coords2.lat)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);

        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var distance = R * c;

        // round to 3 decimal places
        return distance;
    }

};

// invalid request api
exports.invalidRequest = function (req, res) {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Invalid Request.');
};