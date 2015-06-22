var JSX = require('node-jsx').install()
var React = require('react')

  // TweetsApp = require('./components/TweetsApp.react'),
  // Tweet = require('./models/Tweet');

module.exports = {
  index: function(req, res) {
    res.render('home');
  }
}

/*
    // Call static model method to get tweets in the db
    Tweet.getTweets(0,0, function(tweets, pages) {

      // Render React to a string, passing in our fetched tweets
      var markup = React.renderComponentToString(
        TweetsApp({
          tweets: tweets
        })
      );

      // Render our 'home' template
      res.render('home', {
        markup: markup, // Pass rendered react markup
        state: JSON.stringify(tweets) // Pass current state to client side
      });

    });

  page: function(req, res) {
    // Fetch tweets by page via param
     // Tweet.getTweets(req.params.page, req.params.skip, function(tweets) {

      // Render as JSON
      res.send(tweets);

    });
  }

var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('index', { title: 'FinanceU' });
});

module.exports = router;
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;


    */
