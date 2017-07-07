import React, { Component } from 'react';
import './App.css';
import Landing from './landingcomps/Landing'
import {Switch, Route } from 'react-router-dom'



class App extends Component {
  render() {
    return (
        <div>
          <Switch>
            <Route exact path="/" component={Landing}/>
          </Switch>
        </div>
    );
  }
}

export default App;
