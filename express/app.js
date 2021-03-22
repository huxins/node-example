var express = require('express');
var utility = require('utility');

var app = express();

app.get('/', function (req, res) {
    var q = req.query.q;
    var result = "Hello World"
    if (q) {
        var result = utility.md5(q);
    }
    res.send(result);
});

app.listen(3000, function () {
    console.log('app is running at port 3000');
});
