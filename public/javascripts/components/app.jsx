var React = require('react');
var ReactDOM = require('react-dom');

var StockFixedTable = require('./stock_fixed_table.jsx');

ReactDOM.render(
	<StockFixedTable />,
	document.getElementById('stockFixedTable')
)

var StockTable = require('./stock_table.jsx').StockTable;
var TickerForm = require('./stock_table.jsx').TickerForm;
var QuotesTable = require('./stock_table.jsx').QuotesTable;
var TradesTable = require('./stock_table.jsx').TradesTable;

var ProjectGrid = require('./project_grid.jsx');

ReactDOM.render(
    <StockTable />,
    document.getElementById('stockTable')
);

ReactDOM.render(
    <TickerForm />,
    document.getElementById('tickerFormReact')
);

ReactDOM.render(
    <QuotesTable />,
    document.getElementById('quotesTable')
);

ReactDOM.render(
    <TradesTable />,
    document.getElementById('tradesTable')
);

// ReactDOM.render(
//     <ProjectGrid />,
//     document.getElementById('projectGrid')
// );
