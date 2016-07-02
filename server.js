// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get("/api/whoami", function (request, response) {
  var headers = request.headers;
      
  response.send({
    "ipaddress": headers['x-forwarded-for'].split(',').pop().trim(),
    "language": headers['accept-language'].split(';')[0].split(',')[0],
    "software": headers['user-agent'].match(/\((.+?)\)/)[1]
  });
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
