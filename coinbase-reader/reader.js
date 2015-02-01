// Uses websockets to maintain a live stream of data
var WebSocket = require('ws');





var coinbaseDataFeedSocket = new WebSocket('wss://ws-feed.exchange.coinbase.com')


coinbaseDataFeedSocket.onopen = function(event){
    var suscribeMsg = { 
        type: 'subscribe',
        product_id : 'BTC-USD'
    };
    coinbaseDataFeedSocket.send(JSON.stringify(suscribeMsg));
}

coinbaseDataFeedSocket.onmessage = function(event){
    console.log(event.data);
}
