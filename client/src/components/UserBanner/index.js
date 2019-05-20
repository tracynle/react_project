import React from 'react';
import "./styles.css"
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import ProductCard from '../ProductCard/index';
import UserCard from '../UserCard/index';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { Link } from 'react-router-dom';


import SearchBar from '../SearchBar';
import axios from 'axios';
import ashKetchum from '../../utils/ashKetchum';
import WishesCard from '../WishesCard';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 7,
    backgroundColor: "grey",
  },
})

// Start of the UserBanner Class
class UserBanner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileOpen: false,
      renderProducts: true,
      wishCards: []
    };

    this.wishlistClick = this.wishlistClick.bind(this);
    // this.searchProductsClick = this.searchProductsClick.bind(this);
  }

  //**TRACY --- added a state change event that goes to wishlist */
  // when wishlist is clicked, you make a request to the server to get the likes belonging to user: Ash
  wishlistClick = (e) => {
    e.preventDefault();
    // if (this.state.renderProducts === true) {
      this.setState({
        renderProducts: false
      });
    //   console.log('this should be false: ' + this.state.renderProducts);true }

    // Make a get request from UserLikes db in the UserId column which gets their liked items
    // will be called in wishListClick
    axios.get('api/userLikes', {
      params: {
        userId: ashKetchum.id
      }
    })
    .then(response => {
      console.log("Response!!!!!", response);
      // using setState, we save the response in the state: wishCards state
        this.setState({
          wishCards: response.data
        })
    })
    .catch(function (error) {
        console.log(error);
    })
  };

  //**TRACY --- added another button that allows you to search products and render them */
  // searchProductsClick = (e) => {
  //   e.preventDefault();
  //   if (this.state.renderProducts ===true) {
  //     this.setState({
  //       renderProducts: true
  //     });
  //     console.log('this should be false: ' + this.state.renderProducts)true   }
  // }

  friendsClick = (e) => {
    e.preventDefault();
    function UserBannerFriendsClick() {
      //Input logic that will route to the users list of friends
      return console.log("Going to my list of Friends");
    }
    return UserBannerFriendsClick();
  };


  savedWishesClick = (e) => {
    e.preventDefault();
    function UserBannerSavedWishesClick() {
      //Input logic that will route to all of the items you saved for your friends
      return console.log("Going to all the Wishes that you saved for your friends");
    }
    return UserBannerSavedWishesClick();
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  // UNSAFE_componentWillReceiveProps = () => {
  //   console.log("zzzzzzzz");
  
  // }

  static getDerivedStateFromProps(props, state) {
    state.renderProducts = true;
    console.log("getttingggg");
    return state;
  }

  render() {
    const { classes, theme } = this.props;

    const drawer = (
      <div>
        <UserCard
          UserImageUrl={ashKetchum.image}
          UserName={ashKetchum.name}
          UserBday={ashKetchum.bday}
          UserPhrase={ashKetchum.userPhrase}
        />
        <List>
          <Divider />
          <ListItem button onClick={this.searchProductsClick}>
            <ListItemText primary={"Search Etsy"} />
          </ListItem>
          <Divider />
          <ListItem button onClick={this.wishlistClick}>
            <ListItemText primary={"My Wishlist"} />
          </ListItem>
          <Divider />
          <Link to="/FriendsList">
            <ListItem button>
              <ListItemText primary={"My Friends"} />
            </ListItem>
          </Link>
          <Divider />
        </List>
      </div>
    );

    //**TRACY --- this is to be replace with the mapping logic for the WishList Cards */
    let mapWishlistCards = this.state.wishCards.map(item => {
      return (
        <WishesCard 
          key={item.id}
          title={item.title}
          image={item.imageUrl}
          price={item.price}
          description={item.description}
        />
      )
    })

    //**TRACY --- this is where I saved the mapping of product card as a variable */
    let mapProductCards = this.props.items.map(item => {
      return (
        <ProductCard
          key={item.listing_id}
          listing_id={item.listing_id}
          title={item.title}
          price={item.price}
          description={item.description}
        />
      )
    });

    //**TRACY --- this is the conditional component that uses the variables 'mapWishlistCards' and 'mapProductCards' */
    let MapProductOrWishlistCards = () => {
      if (this.state.renderProducts === true) {
        return mapProductCards;
      } else {
        return mapWishlistCards;
      }
    }

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap>
              Wish Maker
            </Typography>
            <SearchBar history={this.props.history} />
          </Toolbar>
        </AppBar>
        <nav className={classes.drawer}>
          <Hidden smUp implementation="css">
            <Drawer
              container={this.props.container}
              variant="temporary"
              anchor={theme.direction === 'rtl' ? 'right' : 'left'}
              open={this.state.mobileOpen}
              onClose={this.handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
              className="drawer-color"
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Grid container spacing={16} justify="flex-start">
            { MapProductOrWishlistCards() }
          </Grid>
          <div className="below-main"></div>
        </main>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(UserBanner);