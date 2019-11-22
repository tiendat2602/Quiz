import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import './App.css';
import { QuizzesConnector } from './quizzes/QuizzesConnector';
import { QuizzesDataStore } from './data/DataStore';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export default class App extends Component {

  render() {
      return <Provider store = { QuizzesDataStore }>
                <Router>
                  <Switch>
                    <Route path = "/" component = { QuizzesConnector } />
                  </Switch>
                </Router>
      </Provider>
  }
}

