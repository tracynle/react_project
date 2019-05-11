import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from './pages/Home';
import User from './pages/User';
import Friends from './pages/Friends';
import Results from './pages/Results';
import Likes from './pages/Likes';
import NavBar from './components/NavBar';
import Login from './pages/login';
import SignUp from './pages/SignUp';

// create for loop for product card
class App extends React.Component {
  render() {
    return  (
      <div>
        <NavBar></NavBar>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/user" component={User} />
            <Route exact path="/friends" component={Friends} />
            <Route exact path="/likes" component={Likes} />
            <Route exact path="/results" component={Results} />
            <Route exact path="/login" component={Login}/>
            <Route exact path="/SignUp" component={SignUp} />
          </Switch>
        </Router>
      </div>
    );
  }
}
export default App;