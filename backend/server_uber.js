var url = require("url"),
    util = require("util"),
    http = require("http"),
    sqlite3 = require('sqlite3').verbose();

// var db = new sqlite3.Database('/Users/ian/infer_sci/burrito-viz/backend/plane_info.db')
var db = new sqlite3.Database('uber.db');


// Start the HTTP server.
http.createServer(route).listen(8080);
util.log("starting up…");

// Route an HTTP request to the appropriate endpoint.
function route(req, res) {
  util.log(req.connection.remoteAddress + " " + req.url);
  var u = url.parse(req.url);
  switch (u.pathname) {
    case "/stream": {
      getUberData(req, res);
      break;
    }
    case "/shady": {
      getShadyData(req, res);
      break;
    }
    default: {
      fourohfour(req, res);
      break;
    }
  }
}

function getUberData(req, res) {
  var params = url.parse(req.url, true).query,
      filter = {},
      start_id = params.start_id,
      end_id = params.end_id,
      out = [];

  console.log(params);
  util.log(params);

  twohundred(req, res);

  // var query = "select lat, lng from uber where trip_id >= " + start_id + " and trip_id < " + end_id;
  var query = "select lat, lng, origin, destination from uber join hoods on uber.trip_id = hoods.trip_id" +
              " where uber.trip_id >= " + start_id +
              " and uber.trip_id < " + end_id + ";";

  db.all(query, function(err, rows) {
    util.log(rows.length);
    rows.forEach(function (row) {
      // out.push([row.lat, row.lng]);
      result_hash = {"lat_lon": [row.lat, row.lng], "orig": row.origin, "dest": row.destination};
      out.push(result_hash);
    });
    twohundred(req, res);
    // res.end(JSON.stringify({"points" : out}));
    res.end(JSON.stringify(out));
  });
}

function getShadyData(req, res) {
  var params = url.parse(req.url, true).query,
      filter = {},
      out = [];

  console.log(params);
  util.log(params);

  twohundred(req, res);

  // var query = "select lat, lng from uber where trip_id >= " + start_id + " and trip_id < " + end_id;
  var query = "select lat, lng, origin, destination from shadyness" +
              " where origin='Civic Center/Tenderloin' and destination='Civic Center/Tenderloin';";

  db.all(query, function(err, rows) {
    util.log(rows.length);
    rows.forEach(function (row) {
      // out.push([row.lat, row.lng]);
      result_hash = {"lat_lon": [row.lat, row.lng], "orig": row.origin, "dest": row.destination};
      out.push("PONY");
    });
    twohundred(req, res);
    // res.end(JSON.stringify({"points" : out}));
    res.end(JSON.stringify(out));
  });
}

// Handle 404.
function fourohfour(req, res) {
  res.writeHead(404, {"Content-Type": "text/plain"});
  res.end("404 Not Found");
}

// Handle 200.
function twohundred(req, res) {
  res.writeHead(200, {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  });
}
