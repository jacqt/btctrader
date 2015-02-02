/*
 * Module for representing the bot's portfolio
 * We define the objects visible using the exports object
 * So another piece of code in the same directory can write the following
 *      var p = require('./portfolio.js');
 *      var myPortfolio = new p.Portfolio();
 */

exports.Portfolio = Portfolio;

function Portfolio(){
    ;
}


Portfolio.prototype.some_func = function(){
    ;
}

Portfolio.prototype.onBookUpdate = function(data){
    if (GLOBAL.LOGGING_ENABLED){
        console.log('Received a book update');
    }

}

