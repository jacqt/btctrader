/* Module that provides a callback scheme for new information from the coinbase exchange
 * using the websocket api
 */ 


// Uses websockets to maintain a live stream of data
var WebSocket = require('ws');

//Registers a callback for updates in the market
//Also returns the websocket that is connected to the market
exports.subscribeToFeed = function(onUpdateCallback, product_id){
    if (product_id == null || product_id == undefined){
        product_id = 'BTC-USD';
    }
    var coinbaseDataFeedSocket = new WebSocket('wss://ws-feed.exchange.coinbase.com')

    coinbaseDataFeedSocket.onopen = function(event){
        var suscribeMsg = { 
            type: 'subscribe',
            product_id : product_id
        };
        coinbaseDataFeedSocket.send(JSON.stringify(suscribeMsg));
    }

    coinbaseDataFeedSocket.onmessage = function(event){
        if (GLOBAL.LOGGING_ENABLED){
            console.log(event.data);  
        }
        onUpdateCallback(event.data);
    }

    return coinbaseDataFeedSocket; 
}
