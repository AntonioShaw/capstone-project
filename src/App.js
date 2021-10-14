import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Avatar from 'react-avatar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Profile from './components/Profile.js';
import Leaderboard from './components/Leaderboard.js';
import HomePage from './components/HomePage';


function App() {
  return (
    <Router>
    <Switch>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/login" component={login} />
    <Route exact path="/register" component={register} />
    <Route exact path="/profile" component={Profile} />
    <Route exact path="/leaderboards" component={Leaderboard} />
    </Switch>
    </Router>
  )
}



export default App;
  