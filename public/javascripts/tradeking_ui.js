var socket = io.connect();
$(document).ready(function() {
  getQuoteStream(socket);
  getQuoteData(socket);

  processQuoteInput(socket);
  
});

function processQuoteInput(socket) {
  $('#quoteButton').click(function() {
    var quote = $('#userQuote').val();
    socket.emit('userQuote', quote);
  })
}

function getQuoteData(socket) {
  socket.on('quoteData', function(result) {
    if (result.success) {
        $('#quote').text(result.quote);
    } else {
      $('#quote').text('incorrect ticker');
    }
  });
}

function getQuoteStream(socket) {
  socket.on('quoteStream', function(result) {
    if (result.success) {
      $('#stream-quote-table').append(
        '<tr>' + '<td>' + result.quote + '</td>' + '</tr>')
    }
  });
}

function getTradeStream(socket) {
  socket.on('tradeStream', function(result) {
    if (result.success) {
      $('#stream-trade-table').append(
        '<tr>' + '<td>' + result.trade + '</td>' + '</tr>')
    }
  });
}
