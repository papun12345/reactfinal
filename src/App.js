import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import history from './history';
import Signup from './Signup';
import Welcome from './Welcome';

class App extends Component {
  render() {
    return (
    <Router history={history}>
          <Switch>
              <Route exact path='/' component={Signup} />
              <Route path='/welcome' component={Welcome} />
          </Switch>
      </Router>
    );
  }
}

export default App;