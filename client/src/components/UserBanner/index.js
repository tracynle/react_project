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
});

//Test Array **Etsy Search Results Would Replace This**
let etsyProduct = [
  {
    myId: 123,
    image: "http://www.briteandbubbly.com/wp-content/uploads/2012/03/legoavengers.jpg",
    title: "Avengers",
    description: "The crew that rolls deep in the first Avengers Movie",
    price: 23
  },
  {
    myId: 1234,
    image: "https://i.pinimg.com/736x/03/f8/34/03f834d2cb811fb55426a980fa26b28e--lego-avengers-lego-marvel.jpg",
    title: "Avengers Age of Ultron",
    description: "The lego pose of Avengers Age of Ultron",
    price: 25
  },
  {
    myId: 12345,
    image: "https://i.pinimg.com/originals/3a/4c/24/3a4c2457f03faba6fb2be1a66eaa9b68.jpg",
    title: "Avengers Infinity War",
    description: "The Lego version of Avengers Infinity War",
    price: 27
  },
];

//This holds the Map Function
let mapEtsyProducts = etsyProduct.map((productList) => {
  return <Grid key={productList.title.toString()} item lg={3} md={4} sm={6} xs={12}>
    <ProductCard
      userId={productList.myId}
      imageUrl={productList.image}
      title={productList.title}
      description={productList.description}
      price={productList.price}
    />
  </Grid>;
});

// Start of the UserBanner Class
class UserBanner extends React.Component {
  state = {
    mobileOpen: false,
  };

  wishlistClick = (e) => {
    e.preventDefault();
    function UserBannerWishlistClick() {
      //Input logic that will route to users wishlist
      return console.log("Going to my wishlist!");
    }
    return UserBannerWishlistClick();
  }

  friendsClick = (e) => {
    e.preventDefault();
    function UserBannerFriendsClick() {
      //Input logic that will route to the users list of friends
      return console.log("Going to my list of Friends")
    }
    return UserBannerFriendsClick();
  }
  

  savedWishesClick = (e) => {
    e.preventDefault();
    function UserBannerSavedWishesClick() {
      //Input logic that will route to all of the items you saved for your friends
      return console.log("Going to all the Wishes that you saved for your friends");
    }
    return UserBannerSavedWishesClick();
  }

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  render() {
    const { classes, theme } = this.props;

    const drawer = (
      <div>
        <UserCard 
            UserImageUrl={"http://imgmr.com/wp-content/uploads/2016/02/pokemon-4-1200x0.jpg"}
            UserName={"Ash Ketchum"}
            UserBday={"5/26/2019"}
            UserPhrase={"Let me dive into your Misty"}
        />
        <List>
          <Divider />
          <ListItem button onClick={this.wishlistClick}>
            <ListItemText primary={"My Wishlist"} />
          </ListItem>
          <Divider />
          <ListItem button onClick={this.friendsClick}>
            <ListItemText primary={"My Friends"} />
          </ListItem>
          <Divider />
          <ListItem button onClick={this.savedWishesClick}>
            <ListItemText primary={"Saved Friends Wishes"} />
          </ListItem>
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
              Wish Maker
            </Typography>
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
            {mapEtsyProducts}
          </Grid>
          <div className="below-main"></div> 
        </main>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(UserBanner);