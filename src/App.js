import React, { Component } from 'react';
import NavBar from './component/nabar/navbar.component';
import Home from './pages/home/home.component';
import { Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Sports from './pages/Sports/sports.component';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/sports" component={Sports} />
        </Switch>
      </div>
    );
  }
}

export default App;
