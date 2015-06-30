var React = require('react');
// Components
var TickerBox = require('./ticker_box.jsx');
var BigStockGraph = require('./big_stock_graph.jsx');

module.exports = FinanceU = React.createClass({
  render: function() {
    return (
      <TickerBox />
    );
  }
});
