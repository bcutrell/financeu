import React, {PropTypes} from 'react';
import TickerBox from './TickerBox.jsx';

// start using these
import Button from 'react-bootstrap/lib/Button';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';

export default React.createClass({

  getDefaultProps() {
    return {
      tickers: []
    }
  },

  render() {
    return (
      <TickerBox />
    );
  }
});
