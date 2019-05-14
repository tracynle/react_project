import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from './pages/Home';
import User from './pages/User';
import Friends from './pages/Friends';
import Results from './pages/Results';
import Likes from './pages/Likes';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

class App extends React.Component {
  render() {
    return  (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/user" component={User} />
            <Route exact path="/friends" component={Friends} />
            <Route exact path="/likes" component={Likes} />
            <Route exact path="/results" component={Results} />
            <Route exact path="/login" component={Login}/>
            <Route exact path="/signUp" component={SignUp} />
          </Switch>
        </Router>
      </div>
    );
  }
}
export default App;