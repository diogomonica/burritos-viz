var sys = require("sys"),
    http = require("http"),
    url = require("url"),
    path = require("path"),
    events = require("events"),
    querystring = require('querystring'),    
    https = require('https');

var events  = new events.EventEmitter();

function process_request(params){
events.emit("finished_processing", params);
}

http.createServer(function(request, response) {
    var uri = url.parse(request.url).pathname;
    if(uri === "/stream") {
    var listener = events.addListener("finished_processing", function(results) {
            response.writeHead(200, { "Content-Type" : "text/plain" });
            response.write(JSON.stringify(results));
            response.end();
        });
    }
    else {
	response.writeHead(404, {"Content-Type" : "text/plain" });
	response.write("404");
	response.end();
    }
}).listen(8000);

sys.puts("Server running at 8000");
