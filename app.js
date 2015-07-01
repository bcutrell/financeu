var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

debugger;

// Socket.io
var socket_io    = require('socket.io');
var io           = socket_io();
app.io           = io;

var tradeking = require('./lib/tradeking_auth')
var tradeking_consumer = tradeking.consumer()
var config = tradeking.config();

io.sockets.on('connection', function (socket) {    
  handleUserTickerInput(socket);
});

module.exports = app;

// move to seperate file
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