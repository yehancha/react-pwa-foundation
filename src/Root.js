import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { countHit } from './redux/actions/pageHits';
import Home from './Home';
import About from './About';

class Root extends Component {
  componentDidMount = () => {
    this.props.countHit()
  }

  render = () => {
    return (
      <Router>
        <Route path='/' exact component={Home} />
        <Route path='/about' exact component={About} />
      </Router >
    );
  }
}

export default connect(null, { countHit })(Root);
