const StartServer = {}
this.parameters = []
this.initialize = function() {
var http = require('http');
var scripts = this.parameters

http.createServer(function (req, res) {
for (let i = 0; i < scripts.length; i++) {
  const script = scripts[i];
  
}
}).listen(8080);