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
