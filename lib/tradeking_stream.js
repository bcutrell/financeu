// Setup OAuth
var tradeking = require('./tradeking_auth')
var tradeking_consumer = tradeking.consumer()
var config = tradeking.config();

exports.listen = function(io) {
  io.sockets.on('connection', function (socket) {    
    handleUserTickerInput(socket);
  });
}

function handleUserTickerInput(socket) {
  socket.on('tickerInput', function(quote) {
    getQuote(socket, quote);
    getStream(socket, quote);
  })
}

function getQuote(socket, ticker) {
  tradeking_consumer.get(config.api_url+'/market/ext/quotes.json?symbols=' + ticker, config.access_token, config.access_secret,
    function(error, data, response) {
      account_data = JSON.parse(data);

      if (account_data.response.quotes === null) {
        socket.emit('quoteData', { success: false })
      } else {
        var quote_data = account_data.response.quotes.quote;
        socket.emit('quoteData', { success: true,
          ask: quote_data.ask,
          beta: quote_data.beta,
          wk52hi: quote_data.wk52hi,
          wk52lo: quote_data.wk52lo,
          name: quote_data.name,
          eps: quote_data.eps
          })
      }
    });
};

function getStream(socket, ticker) {
  var streaming_url = config.stream_api_url + '/market/quotes.json?symbols=' + ticker
  
  var tradeking_stream = 
    tradeking_consumer.get(streaming_url, config.access_token, config.access_secret);

  tradeking_stream.on('response', function (response) {
    response.setEncoding('utf8');
    response.on('data', function(data) {
      stream_data = JSON.parse(data)
      if (typeof stream_data.quote !== 'undefined') {
        socket.emit('quoteStream', {success: true, 
          symbol: stream_data.quote.symbol,
          datetime: stream_data.quote.datetime,
          bid: stream_data.quote.bid,
          bidSize: stream_data.quote.bidsz,
          ask: stream_data.quote.ask,
          askSize: stream_data.quote.asksz,
          exchange: stream_data.quote.exch
          })
      } else if (typeof stream_data.trade !== 'undefined') {
        socket.emit('tradeStream', {success: true, 
          symbol: stream_data.trade.symbol,
          datetime: stream_data.trade.datetime,
          last: stream_data.trade.last,
          vwap: stream_data.trade.vwap,
          exchange: stream_data.trade.exch
          })
      }
    })
  });
  tradeking_stream.end();
}
