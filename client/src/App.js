import React from 'react';
import Appbar from './components/Appbar';
import Grid from "@material-ui/core/Grid";
import ProductCard from './components/ProductCard';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Home from './pages/Home';
import User from './pages/User';
import Friends from './pages/Friends';
import FriendsList from './pages/FriendList';
import Wrapper from './components/Wrapper';

// create for loop for product card
class App extends React.Component {
  render() {

    // Test array to show map object in each card
    // jsx can only accept props, not objects so you would have to specify what key you want to get the map's value
  
    let searchResults = [
      {
        "title": "knitted bag",
        "category": "handbag",
        "price": "$80"
      },
      {
        "title": "Clay pot",
        "category": "ceramic",
        "price": "$25"
      },
      {
        "title": "silk scarf ",
        "category": "accessories",
        "price": "$40"

      }
    ];

    return  (
      <div>
        <Appbar></Appbar>

        <Grid container spacing={24}>
          {searchResults.map(function(searchResult){
            return(
              <Grid item xs={12} sm={6} lg={4} xl= {3}>
                <ProductCard>
                  <div>
                    {searchResult.title}
              
                  </div>
                </ProductCard>
              </Grid>
            )
          })}
        </Grid>

        <Router>
          <Wrapper>
            <Route exact path="/" component={Home} />
            <Route exact path="/User" component={User} />
            <Route exact path="/Friends" component={Friends} />
            <Route exact path="/FriendsList" component={FriendsList} />
          </Wrapper>
        </Router>
      </div>
    );
  }
}
export default App;
