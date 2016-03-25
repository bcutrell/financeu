var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/tradeking', function(req, res, next) {
  res.render('tradeking');
});

router.get('/stocks', function(req, res, next) {
  res.render('stocks');
});

module.exports = router;
