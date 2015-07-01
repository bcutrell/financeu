import React from 'react';
import Task from './Task.jsx';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import Alert from 'react-bootstrap/lib/Alert';

var TickerForm = React.createClass({
  getInitialState: function() {
     return {tickers: ''};
   },
   
   handleClick: function() {
    // TODO add all tickers entered
    var newTicker = React.findDOMNode(this.refs.myTickerInput).value
    var socket = io.connect();
    socket.emit('tickerInput', newTicker);
  },

  componentDidMount: function(){
    // called directly after mounting
  },
  
  render: function() {
    return (

<div className="row">
  <div className="col-lg-12">
    <form id="tickerForm" className="topBefore">
      <input id="tickerInput" type="text" placeholder="TICKER" ref="myTickerInput" />
      <input id="submit" type="submit" value="GO!" onClick={this.handleClick} />
    </form>
  </div>
</div>
    );
  }
});

var TickerInfoRow = React.createClass({
  infoTypes: function () {
    return [{'Name' :  'Name', 'Id'  : 'nameBox' },
    {'Name' :  'Ask', 'Id'  : 'askBox' },
    {'Name' :  'Beta', 'Id'  : 'betaBox' },
    {'Name' :  '52 Week High', 'Id'  : 'fiftyTwoWeekHighBox' },
    {'Name' :  '52 Week Low', 'Id'  : 'fiftyTwoWeekLowBox' },
    {'Name' :  'EPS', 'Id'  : 'epsBox' }]
  },

  render: function() {
    var displayInfoCol = this.infoTypes().map(function (infoCol) {

  return (
<div className="col-lg-2">
  <div className="alert alert-success min-alert-height" role="alert">
    <div className="text-center"><strong>{infoCol.Name}</strong></div>
    <div id={infoCol.Id} className="text-center"></div>
  </div>
</div>
    );
  });

  return (
<div className="row">
  { displayInfoCol }
</div>
    );
  }
});

export default React.createClass({
  render: function() {
    return (
      <div className="row well top-well">
        <TickerForm />
        <TickerInfoRow />
      </div>
    );
  }
});

