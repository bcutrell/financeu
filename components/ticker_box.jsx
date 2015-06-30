var React = require('react');

var TickerForm = React.createClass({
  getInitialState: function() {
     return {ticker: ''};
   },
   
   handleClick: function() {
    debugger;
    // This must be changed to =>
    // React.findDOMNode(this.refs.myTickerInput).focus();
    // when I update reactjs
    // this.getDOMNode(this.refs.myTickerInput).focus()
    // this.setState({ticker: event.target.value});
  },

  componentDidMount: function(){
    var socket = io.connect();
    // socket.on
  },
  
  render: function() {
    return (

<div className="row">
  <div className="col-lg-12">
    <form id="tickerForm" className="topBefore">
      
      // value={this.state.ticker}
      <input id="tickerInput" type="text" placeholder="TICKER" ref="myTickerInput" />

      <input id="submit" type="submit" value="GO!" onClick={this.handleClick} />
    </form>
  </div>
</div>

    );
  }
});
// Bad ticker handling
// <div class="bad-ticker-box">
//   <div class="row">
//     <div class="alert alert-danger min-alert-height" role="alert">
//       <div id="#badTickerBox" class="text-center"></div>
//     </div>
//   </div>
// </div>

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

var TickerBox = React.createClass({
  render: function() {
    return (
      <div className="row well top-well">
        <TickerForm />
        <TickerInfoRow />
      </div>
    );
  }
});

module.exports = TickerBox;
