// var React = require('react');
import React from "react";
// var ReactRouter = require('react-router-dom');
// var Router = ReactRouter.BrowserRouter;
import { Route, Switch, BrowserRouter as Router} from "react-router-dom";
// var Route = ReactRouter.Route;
// var Switch = ReactRouter.Switch;
// var Nav = require('./Nav');
import Nav from './Nav';
// var Home = require('./Home');
import Home from'./Home';
// var Projects = require('./Projects');
// import Projects from'./Projects';
// var Monitor = require('./Monitor');
import Monitor from './Monitor';

class Routeapp extends React.Component {
  render() {
    return (
      <Router >
        <div className = 'container'>
          <Nav />
          <Switch>
              <Route exact path = '/' component = {Home} />
              <Route path = '/monitor' component = {Monitor} />
              <Route render={function () {
                  return <p> The directory you want could not find</p>
              }}/>
          </Switch>
        </div >
      </Router>
    )
  }
}

// module.exports = Routeapp;
export default Routeapp;