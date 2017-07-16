


import React, { Component } from 'react';
import { Navbar,PageHeader } from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';

class Header extends Component {
  render() {
    return (

        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <PageHeader>AMP Health Check Dashboard <small>Subtext for header</small></PageHeader>
           </div>
           );
  }
}

export default Header;
