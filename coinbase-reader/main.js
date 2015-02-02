/* Code that initilaizes the trader
 */

//Global variables can be added via the predefined GLOBAL object
GLOBAL.LOGGING_ENABLED = true;

var Reader = require('./reader.js');
var Portfolio = require('./portfolio.js');
var WebStatusServer = require('./webstatus.js');

function main(){
    var myPortfolio = new Portfolio.Portfolio();
    var WebStatusServer = new WebStatusServer.WebStatusServer();
    

    Reader.subscribeToFeed(myPortfolio.onBookUpdate);
    WebStatusServer.start();
}


main();
