import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Home from './pages/Home';
import User from './pages/User';
import Friends from './pages/Friends';
import Likes from './pages/Likes';
import Wrapper from './components/Wrapper';

// create for loop for product card
class App extends React.Component {
  render() {
    return  (
      <div>
        <Router>
          <Wrapper>
            <Route exact path="/" component={Home} />
            <Route exact path="/User" component={User} />
            <Route exact path="/Friends" component={Friends} />
            <Route exact path="/Likes" component={Likes} />
          </Wrapper>
        </Router>
      </div>
    );
  }
}
export default App;
