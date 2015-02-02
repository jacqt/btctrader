/* Module that allows us to communicate to a browser client
 * to detail how the market is behaving as well as how our 
 * portfolio is doing
 */
var app = require('express')();
var http = require('http').Server(app);

var SERVER_RUNNING = false;
exports.WebStatusServer = WebStatusServer;

function WebStatusServer(portfolio){
    this.portfolio = portfolio;
}


WebStatusServer.prototype.start = function(){
    if (SERVER_RUNNING){
        throw "Server is already running!"
    }
    app.get('/', function(req, res){
        res.sendFile(__dirname + '/index.html');
    });

    http.listen(3000, function(){
        if (GLOBAL.LOGGING_ENABLED){
            console.log('listening on *:3000');
        }
    });

    SERVER_RUNNING = true;
}
