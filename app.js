/** @jsx React.DOM */

var React = require('react');
var FinanceU = require('./components/main.jsx');

// Snag the initial state that was passed from the server side
// var initialState = JSON.parse(document.getElementById('initial-state').innerHTML)

// Render the components, picking up where react left off on the server

React.renderComponent(
  <FinanceU />,
  document.getElementById('financeU')
);

