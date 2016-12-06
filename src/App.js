import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router';

export default class App extends Component {
  render() {
    return(
      <div>
        <h1>What Should I Do Tonight?</h1>
        <ul>
          <li className="main_links"><Link to={'/signin'}>Sign In</Link></li>
          <li className="main_links"><Link to={'/newuser'}>Sign Up</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
}
