// Use the OAuth module
var socketio = require('socket.io');
var io;
var oauth = require('oauth');
var fs = require('fs');
var quotes = [];

exports.listen = function(server) {
  io = socketio.listen(server);
  io.set('log level', 1);

  io.sockets.on('connection', function (socket) {
    
    handleUserQuoteInput(socket);
    // getQuote(socket, 'aapl');
    
    
  });
}

function handleUserQuoteInput(socket) {
  socket.on('userQuote', function(quote) {
    getQuote(socket, quote)
  })
}

// Setup the OAuth Consumer
var file = './config.json';
var file_data = fs.readFileSync(file, 'utf8')
var config = JSON.parse(file_data).config;
var tradeking_consumer = new oauth.OAuth(
  "https://developers.tradeking.com/oauth/request_token",
  "https://developers.tradeking.com/oauth/access_token",
  config.consumer_key,
  config.consumer_secret,
  "1.0",
  "http://mywebsite.com/tradeking/callback",
  "HMAC-SHA1");

function getQuote(socket, ticker) {
  tradeking_consumer.get(config.api_url+'/market/ext/quotes.json?symbols=' + ticker, config.access_token, config.access_secret,
    function(error, data, response) {
      // Parse the JSON data
      account_data = JSON.parse(data);
      
      if (account_data.response.quotes === null) {
        socket.emit('quoteData', { success: false })
      } else {
        var quote = account_data.response.quotes.quote.ask;
        socket.emit('quoteData', { success: true, quote: quote})
      }
    });
};

// Streaming
function streamQuotes(socket, ticker) {
  var streaming_url = config.stream_api_url + '/market/quotes.json?symbols=' + ticker
  var tradeking_stream = tradeking_consumer.get(streaming_url,
                                                config.access_token,
                                                config.access_secret);

  tradeking_stream.on('response', function (response) {
    response.setEncoding('utf8');
    response.on('data', function(data) {
      new_data = JSON.parse(data)
      
      if (typeof new_data.quote !== 'undefined') {
        socket.emit('quoteStream', {quote: new_data.quote})
      } else if (typeof new_data.trade !== 'undefined') {
        socket.emit('tradeStream', {trade: new_data.tade.last})
      }
    })
  });
  tradeking_stream.end();
}

// Response examples

// { trade:
//    { cvol: '30417610',
//      datetime: '2014-07-24T14:35:20-04:00',
//      exch: 'Direct Edge A Exchange',
//      last: '96.92',
//      symbol: 'AAPL',
//      timestamp: '1406226920',
//      vl: '100',
//      vwap: '96.9448' } }
// 
// { quote:
//    { ask: '96.93',
//      asksz: '17',
//      bid: '96.92',
//      bidsz: '4',
//      datetime: '2014-07-24T14:35:21-04:00',
//      exch: 'NASDAQ Regional/CTS',
//      qcond: 'Regular, two-sided open quote automated',
//      symbol: 'AAPL',
//      timestamp: '1406226921' } }

// {"response":{"@id":"-1b260e46:14769af75ec:4577",
// "quotes": {"quote":
// {"adp_100":"330.0386","adp_200":"350.7127","adp_50":"326.4012",
// "adv_21":"3300381","adv_30":"3552216","adv_90":"4155771",
// "ask":"359.9400","ask_time":"14:49","asksz":"1","basis":"4",
// "beta":"1.301","bid":"359.6800","bid_time":"14:49",
// "bidsz":"5","bidtick":"5","chg":"1.5400",
// "chg_sign":"u","chg_t":"1.5400","cl":"358.1400","cusip":"02313510",
// "date":"2014-07-24","datetime":"2014-07-24T14:49:00-04:00",
// "div":"0","divexdate":"20050803","dollar_value":"826048282",
// "eps":"0.64","exch":"NASD","exch_desc":"NASDAQ","hi":"364.8500",
// "iad":"0","incr_vl":"100","last":"359.6800","lo":"358.5200",
// "name":"AMAZON.COM INC","op_flag":"1","opn":"359.9800",
// "pchg":"0.430 %","pchg_sign":"d","pcls":"358.1400","pe":"562.00",
// "phi":"360.6300","plo":"356.6200","popn":"359.0500",
// "pr_adp_100":"330.0974","pr_adp_200":"350.4446","pr_adp_50":"325.3094",
// "pr_date":"2014-07-23","prbook":"15.960","prchg":"-2.7000",
// "pvol":"2688761","qcond":"82","secclass":"0","sesn":"regular",
// "sesn_vl":"2997395","sho":"460,167,000","symbol":"AMZN","tcond":"R",
// "timestamp":"1406227740","tr_num":"30628","tradetick":"d",
// "trend":"uudeduduud","vl":"3010176","volatility12":"0.312269",
// "vwap":"360.6078","wk52hi":"408.0600","wk52hidate":"20140122",
// "wk52lo":"279.3300","wk52lodate":"20130828"}}}}