// var React = require('react');
import React from "react";
// var Link = require('react-router-dom').Link;
// var NavLink = require('react-router-dom').NavLink;
import {Link} from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <div className='home-container'>
        <h3> Main networking devices </h3>
        <Link className='button' to='/monitor'>Home</Link>
      </div>
    )
  }
}

// module.exports = Monitor;
export default Home;