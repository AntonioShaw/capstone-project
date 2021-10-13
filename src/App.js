import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Avatar from 'react-avatar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Profile from './components/Profile.js';
import Leaderboard from './components/Leaderboard.js';
import Login from './components/Login.js';
import Register from './components/Register.js';

function App() {
  return (
  <Router>
  <Switch>
  <Route exact path="/" component={Profile} />
  <Route exact path="/login" component={Login} />
  <Route exact path="/register" component={Register} />
  {/* <Route exact path="/profile" component={Profile} /> */}
  <Route exact path="/leaderboards" component={Leaderboard} />
  </Switch>
  </Router>
  )
}



export default App;
  