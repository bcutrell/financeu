var JSX = require('node-jsx').install()
var React = require('react')

module.exports = {
  index: function(req, res) {
    res.render('home');
  }
}

