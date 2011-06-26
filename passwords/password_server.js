var sys = require("sys"),
    http = require("http"),
    url = require("url"),
    path = require("path"),
    fs = require("fs"),
    events = require("events"),
    querystring = require('querystring'),    
    https = require('https');

function load_static_file(uri, response, json) {
     var filename = path.join(process.cwd(), uri);
     path.exists(filename, function(exists) {
        console.log(filename)
        if(!exists) {
            response.writeHead(404, {"Content-Type": "text/plain"});
            response.end("404 Not Found\n");
            return;
        }

        fs.readFile(filename, "binary", function(err, file) {
            if(err) {
                response.writeHead(500, {"Content-Type": "text/plain"});
                response.end(err + "\n");
                return;
            }

            response.writeHead(200);
            if (json){
              response.end(JSON.stringify(file), "binary");  
              
            }else{
              response.end(file, "binary");
            }
            
        });
    });
}

http.createServer(function(request, response) {
    var uri = url.parse(request.url).pathname;
    if(uri === "/stream") {
    tweet_emitter.setMaxListeners(10);
    var listener = tweet_emitter.addListener("tweets", function(tweets) {
            console.log("tweet called");
            response.writeHead(200, { "Content-Type" : "text/plain" });
            response.write(JSON.stringify(tweets));
            response.end();

            clearTimeout(timeout);
        });

        var timeout = setTimeout(function() {
            response.writeHead(200, { "Content-Type" : "text/plain" });
            response.write(JSON.stringify([]));
            response.end();

            tweet_emitter.removeListener(listener);
        }, 10000);
    }
    else if (uri === "/passwords") {
        passwords = [];
        require('fs').readFileSync('passwords.txt').toString().split('\n').forEach(function (line) { passwords.push(line); })
         response.writeHead(200, { "Content-Type" : "text/plain" });
          response.write(JSON.stringify(passwords));
          response.end();
          //        load_static_file("pwd_small.txt", response,true);
    }
    else {
        load_static_file(uri, response,false);
    }
}).listen(8080);

sys.puts("Server running at http://localhost:8080/");
