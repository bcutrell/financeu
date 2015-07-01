/** @jsx React.DOM */

var React = require('react');
var FinanceU = require('./components/main.jsx');

// Snag the initial state that was passed from the server side
// var initialState = JSON.parse(document.getElementById('initial-state').innerHTML)
// Render the components, picking up where react left off on the server

// This will must change when React is updated
React.render(
  <FinanceU />,
  document.getElementById('financeU')
);
