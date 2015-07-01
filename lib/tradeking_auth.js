var oauth = require('oauth');
var fs = require('fs');

var file = './config.json';
var file_data = fs.readFileSync(file, 'utf8')
var config = JSON.parse(file_data).config;

// Setup OAuth
exports.consumer = function(){
  return new oauth.OAuth(
    "https://developers.tradeking.com/oauth/request_token",
    "https://developers.tradeking.com/oauth/access_token",
    config.consumer_key,
    config.consumer_secret,
    "1.0",
    "http://mywebsite.com/tradeking/callback",
    "HMAC-SHA1");
}

// https://api.tradeking.com/v1
// "http://localhost:3000/tradeking/callback",

exports.config = function(){
  return config
}
