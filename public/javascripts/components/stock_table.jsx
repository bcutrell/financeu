var React = require('react');
var socket = io.connect();

module.exports = React.createClass({

 // componentDidMount: function () {
 //    socket.on('quoteData', alert('hello'));
 //  },

render: function() {
    return (
<table className="table">
  <thead>
    <tr>
      <th>Ask</th>
      <th>Beta</th>
      <th>52 Week High</th>
      <th>52 Week Low</th>
      <th>Name</th>
      <th>EPS</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td id="askBox"></td>
      <td id="betaBox"></td>
      <td id="fiftyTwoWeekHighBox"></td>
      <td id="fiftyTwoWeekLowBox"></td>
      <td id="nameBox"></td>
      <td id="epsBox"></td>
    </tr>
  </tbody>
</table>
)

}
});
