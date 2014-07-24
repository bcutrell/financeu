function processQuoteInput(socket) {
    var quote = $('#userQuote').val();
    socket.emit('userQuote', quote);
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

var socket = io.connect();
$(document).ready(function() {

  getQuoteData(socket);
  $('#quoteButton').click(function() {
    processQuoteInput(socket);
  })
  
});
