import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPageHits } from './redux/reducers';
import logo from './logo.svg';

class Home extends Component {
  render = () => {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </p>
          <p>
            <Link to='/about'
              className="App-link"
            >
              About
            </Link>
          </p>
          <p>
            Page hits: {this.props.pageHits}
          </p>  
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    pageHits: getPageHits(state)
  }
};

export default connect(mapStateToProps)(Home);
