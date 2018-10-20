var React = require('react');
var Projects = require('./Projects');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;
var Nav = require('./Nav');
var Home = require('./Home');

class routeApp extends React.Component {
  render() {
    return (
      <Router >
        <div className = 'container'>
          <Nav />
          <Switch>
              <Route exact path = '/' component = {Home} />
              <Route path = '/projects' component = {Projects} />
              <Route path = '/Monitor' component = {Monitor} />
              <Route render={function () {
                  return <p> The directory you want could not find</p>
              }} />
          </Swithch>
        </div >
      </Router>
    )
  }
}

module.exports = routeApp;