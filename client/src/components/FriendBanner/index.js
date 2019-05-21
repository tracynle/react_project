import React from 'react';
import "./styles.css"
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import FriendProductCard from '../FriendProductCard/index';
import FriendProfile from '../FriendProfile/index';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';

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
    backgroundColor: "grey"
  },
});

//Test Array **Friends Wishlist Results Would Replace This**
let FriendsEtsyWishlist = [
  {
    image: "https://i.pinimg.com/originals/3a/4c/24/3a4c2457f03faba6fb2be1a66eaa9b68.jpg",
    title: "Avengers Infinity War",
    description: "The Lego version of Avengers Infinity War",
    price: 27
  },
  {
    image: "https://i.pinimg.com/736x/03/f8/34/03f834d2cb811fb55426a980fa26b28e--lego-avengers-lego-marvel.jpg",
    title: "Avengers Age of Ultron",
    description: "The lego pose of Avengers Age of Ultron",
    price: 25
  },
  {
    image: "http://www.briteandbubbly.com/wp-content/uploads/2012/03/legoavengers.jpg",
    title: "Avengers",
    description: "The crew that rolls deep in the first Avengers Movie",
    price: 23
  },
]
//Test Array End

//This holds the Map Function
let FriendsEtsyProducts = FriendsEtsyWishlist.map((productList) => {
  return <Grid key={productList.title.toString()} item lg={3} md={4} sm={6} xs={12}>
    <FriendProductCard
      image={productList.image}
      title={productList.title}
      description={productList.description}
      price={productList.price}
    />
  </Grid>;
});
//End of Map Function

class FriendsBanner extends React.Component {
  state = {
    mobileOpen: false,
  };

  ProfileClick = (e) => {
    e.preventDefault();
    function gotToProfile() {
      //input logic to go to my profile
      return console.log("Going to my Profile!");
    }
    return gotToProfile();
  }

  WishlistClick = (e) => {
    e.preventDefault();
    function gotToMyWishes() {
      //input logitc to go to my wishlist
      return console.log("Going to my Wishlist!");
    }
    return gotToMyWishes();
  }

  FriendsListClick = (e) => {
    e.preventDefault();
    function goToMyFriends() {
      //input logic to go to my list of friends
      return console.log("Going to my Friends list!");
    }
    return goToMyFriends();
  }

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  render() {
    const { classes, theme } = this.props;

    const drawer = (
      <div>
        <FriendProfile
          FriendImageUrl={"http://www1.pictures.zimbio.com/mp/PILmttI1PZcx.gif"}
          FriendName={"Barry Allen"}
          FriendBday={"7/29/1993"}
        />
        <List>
          <Divider />
          <Link to="/user">
            <ListItem button>
              <ListItemText primary={"My Profile"} />
            </ListItem>
          </Link>
          <Divider />
          <Link to="/USER">
            <ListItem button>
              <ListItemText primary={"My Wishlist"} />
            </ListItem>
          </Link>
          <Divider />
          <Link to="/friendslist">
            <ListItem button>
              <ListItemText primary={"My Friends"} />
            </ListItem>
          </Link>
          <Divider />
        </List>
      </div>
    );

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
              Wishes
            </Typography>
          </Toolbar>
        </AppBar>
        <nav className={classes.drawer}>
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
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
            {FriendsEtsyProducts}
          </Grid>
          <div className="below-main-f"></div>
        </main>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(FriendsBanner);