var React = require('react');
var socket = io.connect();

var socket = io.connect();
var symbols = []

StockTable = React.createClass({

  // socket.on('quoteData', function(result) {
  //   if (result.success) {
  //     alert('hello')
  //   }
 // componentDidMount: function () {
 //    socket.on('quoteData', alert('hello'));
 //  },

render: function() {
    return (
<table className="table">
  <thead>
    <tr>
      <th>Ask</th>
      <th>Beta</th>
      <th>52 Week High</th>
      <th>52 Week Low</th>
      <th>Name</th>
      <th>EPS</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td id="askBox"></td>
      <td id="betaBox"></td>
      <td id="fiftyTwoWeekHighBox"></td>
      <td id="fiftyTwoWeekLowBox"></td>
      <td id="nameBox"></td>
      <td id="epsBox"></td>
    </tr>
  </tbody>
</table>
)

}
});


TickerForm = React.createClass({

  handleSubmit: function() {
    event.preventDefault();
    var quote = $('#tickerInput').val();
    socket.emit('tickerInput', quote);
    symbols.unshift([quote.toUpperCase(), quote]);
    this.newTradeViewGraph(symbols);
  },
  
  newTradeViewGraph: function(symbols) {
    new TradingView.MediumWidget({
      "container_id": "bigGraph",
      "symbols": symbols,
      "gridLineColor": "#E9E9EA",
      "fontColor": "#83888D",
      "underLineColor": "#F0F0F0",
      "timeAxisBackgroundColor": "#E9EDF2",
      "trendLineColor": "#FF7965",
      "width": '100%',
      "height": 350
    });
  },

  render: function() {
    return (
<div className='text-center'>
  <form id="tickerForm" className="form-inline" onSubmit={this.handleSubmit}>
    <div className="form-group">
      <input id="tickerInput" type="text" placeholder="TICKER" className="form-control"/>
    </div>
    <div className="text-center">
      <button id="submit" type="submit" className="btn btn-default">Submit</button>
    </div>
  </form>
  <div style={{ display: 'none' }} className="bad-ticker-box">
    <div className="row">
      <div role="alert" className="alert alert-danger min-alert-height">
        <div id="badTickerBox" className="text-center"></div>
      </div>
    </div>
  </div>
</div>
  )
  }
})

module.exports = { StockTable: StockTable, TickerForm: TickerForm }
