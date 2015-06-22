var React = require('react');

var HtmlHead = React.createClass({
    render: function() {
    return (

<head>
  <title>FinanceU</title>
  <link href="stylesheets/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
</head>

    );
  }
});

var NavBar = React.createClass({
  render: function() {
    return (
<header className="navbar navbar-inverse navbar-fixed-top bs-docs-nav" role="banner">
  <div className="container">
    <div className="navbar-header">
      <button className="navbar-toggle" type="button" data-toggle="collapse" data-target=".bs-navbar-collapse">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
      <a href="#" className="navbar-brand">FinanceU</a>
    </div>
  </div>
</header>
    );
  }
});

var DefaultLayout = React.createClass({
  render: function() {
    return (
<html lang='en'>
  <HtmlHead />
  <NavBar />
  <div className="jumbotron">
  <div className="container">
    { this.props.page_content }
  </div>
  </div>
</html>
    );
  }
});

module.exports = DefaultLayout;
