var request = require("request");

// http://dev.markitondemand.com/MODApis/Api/v2/InteractiveChart/json?parameters=%7B%22Normalized%22%3Afalse%2C%22NumberOfDays%22%3A365%2C%22DataPeriod%22%3A%22Day%22%2C%22Elements%22%3A%5B%7B%22Symbol%22%3A%22AAPL%22%2C%22Type%22%3A%22price%22%2C%22Params%22%3A%5B%22c%22%5D%7D%5D%7D
function callMarkit() {
  markit_url = "http://dev.markitondemand.com/MODApis/Api/v2/Quote/jsonp\?symbol\=AAPL\&callback\=myFunction"
  request(markit_url, function(error, response, body) {
    // Extract the data
    text = body.match(/\(([^)]+)\)/)[1]
    results = JSON.parse(text)
    console.log(results);
  });
}

setInterval(function(){
      callMarkit();
}, 5000)
