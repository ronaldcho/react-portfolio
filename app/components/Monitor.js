var React = require('react');
var Link = require('react-router-dom').Link;
var NavLink = require('react-router-dom').NavLink;

class Monitor extends React.Component {
  render() {
    return (
      <div className='home-container'>
        <h1>Monitor network devices</h1>
        <Link className='button' to='/monitor'>Monitor</Link>
      </div>
    )
  }
}

// module.exports = Monitor;
export default Monitor;