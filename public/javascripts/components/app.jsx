var React = require('react');
var StockTable = require('./stock_table.jsx').StockTable;
var TickerForm = require('./stock_table.jsx').TickerForm;
var QuotesTable = require('./stock_table.jsx').QuotesTable;

React.render(
    <StockTable />,
    document.getElementById('stockTable')
);

React.render(
    <TickerForm />,
    document.getElementById('tickerFormReact')
);

React.render(
    <QuotesTable />,
    document.getElementById('quotesTable')
);