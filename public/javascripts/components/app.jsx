var React = require('react');
var StockTable = require('./stock_table.jsx').StockTable;
var TickerForm = require('./stock_table.jsx').TickerForm;

React.render(
    <StockTable />,
    document.getElementById('stockTable')
);

React.render(
    <TickerForm />,
    document.getElementById('tickerFormReact')
);

