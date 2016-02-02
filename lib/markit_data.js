var request = require("request");

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