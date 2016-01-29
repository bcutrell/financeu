var React = require('react');
var HelloWorld = require('./example.jsx');
var StockTable = require('./stock_table.jsx');

React.render(
    <StockTable />,
    document.getElementById('stockTable')
);