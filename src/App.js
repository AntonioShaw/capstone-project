import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import Avatar from 'react-avatar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Profile from './components/Profile.js';
import Leaderboard from './components/Leaderboard.js';
import HomePage from './components/HomePage';

function App() {
  return (
  <HomePage /> 
  )
}



export default App;
  