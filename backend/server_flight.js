var url = require("url"),
    util = require("util"),
    http = require("http"),
    sqlite3 = require('sqlite3').verbose();

// var db = new sqlite3.Database('/Users/ian/infer_sci/burrito-viz/backend/plane_info.db')
var db = new sqlite3.Database('plane_info.db');


// Start the HTTP server.
http.createServer(route).listen(8888);
util.log("starting up…");

// Route an HTTP request to the appropriate endpoint.
function route(req, res) {
  util.log(req.connection.remoteAddress + " " + req.url);
  var u = url.parse(req.url);
  switch (u.pathname) {
    case "/stream": {
      getSfoData(req, res);
      break;
    }
    default: {
      fourohfour(req, res);
      break;
    }
  }
}

function getSfoData(req, res) {
  var params = url.parse(req.url, true).query,
      out = [];

  res.writeHead(200, {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  });

  db.all("select * from flights limit 10", function(err, rows) {
    rows.forEach(function (row) {
      console.log(row.flights);
      out.push(row.flights);
    });
    twohundred(req, res);
    res.end(JSON.stringify(out));
    db.close();
  });
}

// Handle 200.
function twohundred(req, res) {
  res.writeHead(200, {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  });
}

// Handle 404.
function fourohfour(req, res) {
  res.writeHead(404, {"Content-Type": "text/plain"});
  res.end("404 Not Found");
}
