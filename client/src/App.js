import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from './pages/Home';
import User from './pages/User';
import Friends from './pages/Friends';
import FriendsList from './pages/FriendsList';
import Results from './pages/Results';
import Likes from './pages/Likes';
// import NavBar from './components/NavBar';
// import Results from './pages/Results';

class App extends React.Component {
  render() {
    return  (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/user" component={User} />
            <Route exact path="/friends" component={Friends} />
            <Route exact path="/friendsList" component={FriendsList} />
            <Route exact path="/likes" component={Likes} />
            <Route exact path="/results" component={Results} />
          </Switch>
        </Router>
      </div>
    );
  }
}
export default App;