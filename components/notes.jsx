var React = require('react');
var DefaultLayout = require('./layouts/default');
var TickerBox = require('./components/ticker_box');

// var IndexPage = require('./components/index_page');

var FinanceU = React.createClass({
  render: function() {
    return (

<DefaultLayout page_content= <TickerBox /> />

    );
  }
});

module.exports = FinanceU;

// <div class="bad-ticker-box">
//   <div class="row">
//     <div class="alert alert-danger min-alert-height" role="alert">
//       <div id="#badTickerBox" class="text-center"></div>
//     </div>
//   </div>
// </div>

// <div class="row">
//   <div class="col-lg-12">
//     <div id="bigGraph"></div>
//   </div>
// </div>

var React = require('react');

var HtmlHead = React.createClass({
    render: function() {
    return (

<head>
  <title>FinanceU</title>
  <link href="stylesheets/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
</head>

    );
  }
});

var NavBar = React.createClass({
  render: function() {
    return (
<header className="navbar navbar-inverse navbar-fixed-top bs-docs-nav" role="banner">
  <div className="container">
    <div className="navbar-header">
      <button className="navbar-toggle" type="button" data-toggle="collapse" data-target=".bs-navbar-collapse">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
      <a href="#" className="navbar-brand">FinanceU</a>
    </div>
  </div>
</header>
    );
  }
});

var DefaultLayout = React.createClass({
  render: function() {
    return (
<html lang='en'>
  <HtmlHead />
  <NavBar />
  <div className="jumbotron">
  <div className="container">
    { this.props.page_content }
  </div>
  </div>
</html>
    );
  }
});

module.exports = DefaultLayout;


var React = require('react');

var TickerInput = React.createClass({
  render: function() {
    return (
<div className="row">
  <div className="col-lg-12">
    <form id="tickerForm" className="topBefore">
      <input id="tickerInput" type="text" placeholder="TICKER" />
      <input id="submit" type="submit" value="GO!" />
    </form>
  </div>
</div>
    );
  }
});

var TickerInfoRow = React.createClass({
  infoTypes: function () {
    return [{'Name' :  'Ask', 'Id'  : 'askBox' },
    {'Name' :  'Beta', 'Id'  : 'betaBox' },
    {'Name' :  '52 Week High', 'Id'  : 'fiftyTwoWeekHighBox' },
    {'Name' :  '52 Week Low', 'Id'  : 'fiftyTwoWeekLowBox' },
    {'Name' :  'EPS', 'Id'  : 'epsBox' }]
  },

render: function() {
    var showTypeCol = (infoCol) => (
<div className="col-lg-2">
  <div className="alert alert-success min-alert-height" role="alert">
    <div className="text-center"><strong>{infoCol.Name}</strong></div>
    <div id={infoCol.Id} className="text-center"></div>
  </div>
</div>
    );

    return (
<div className="row">
  {this.infoTypes().map(showTypeCol)}
</div>
    );
  }
});

var TickerBox = React.createClass({
  render: function() {
    return (
      <div class="row well top-well">
      <TickerInput />
      <TickerInfoRow />
      </div>
    );
  }
});

module.exports = TickerBox;
