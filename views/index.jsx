var React = require('react');

var DefaultLayout = require('./layouts/default');
var TickerBox = require('./components/ticker_box');
debugger;
var FinanceU = React.createClass({
  render: function() {
    return (
<DefaultLayout page_content= <TickerBox /> >
  
</DefaultLayout>
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
