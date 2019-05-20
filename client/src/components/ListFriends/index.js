import React, { Component } from 'react';
import FriendCard from '../FriendCard/index';
import Grid from '@material-ui/core/Grid';
import classNames from 'classnames';
// import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';

// DRAWER WIDTH
const drawerWidth = 240;

//** STYLING */
const styles = theme => ({
  root: {
    width: '100%',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit,
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  friendCardYo: {
    paddingLeft: '5%',
    paddingTop: '85px'
  }
});

// Test Array with all friends **CREATE LOGIC THAT PULLS ACTUALL FRIEND DATA AND SAVES IT IN AN ARRAY LIKE THIS**
let AllFriends = [
  {
    friendId: '1',
    image: 'http://www1.pictures.zimbio.com/mp/PILmttI1PZcx.gif',
    name: 'Barry Allen',
    birthday: '07/29/1993',
  },
  {
    friendId: '2',
    image: 'https://media1.tenor.com/images/555b70830acdcc9bc240613f88230707/tenor.gif?itemid=11092218',
    name: 'Oliver Queen',
    birthday: '05/16/1985',
  },
  {
    friendId: '3',
    image: 'https://media1.tenor.com/images/c543e759cbb606a2549779f8e1375e63/tenor.gif?itemid=8803892',
    name: 'Kara Zor-el',
    birthday: '09/22/1975',
  },
  {
    friendId: '4',
    image: 'https://media.giphy.com/media/ITnn2IenMv7SE/giphy.gif',
    name: 'Bruce Wayne',
    birthday: '05/27/1983',
  },
];

//Maps Array and assigns ** THE PROPS IN  '<FriendCard />' WILL BE REPLACED WITH FUNCTION THAT 
let mapAllFriends = AllFriends.map((thisFriend) => {
  return <Grid key={thisFriend.friendId.toString()} item lg={3} md={4} sm={6} xs={12}>
    <FriendCard
      myId={thisFriend.friendId}
      FriendImageUrl={thisFriend.image}
      FriendName={thisFriend.name}
      FriendBday={thisFriend.birthday}
    />
  </Grid>
});

class ListFriends extends Component {

  state = {
    open: false,
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  //this is the profile click handler that invokes the 'headToProfile' function
  profileClick = (e) => {
    e.preventDefault();
    function headToProfile() {
      //Enter logic and routing in this function head to profile
      return console.log("Going to Profile function!");
    }
    return headToProfile();
  }

  //this is the wishlist click handler that will take you to the users wishlist
  wishlistClick = (e) => {
    e.preventDefault();
    function headToUserWishlist() {
      //Create logic and routing that will get you to the Users Wishlist
      return console.log("Going to Users Wishlist")
    }
    return headToUserWishlist();
  }

  render() {

    const { classes, theme } = this.props;
    const { open } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="fixed" className={classNames(classes.appBar, {
          [classes.appBarShift]: open,
        })}
        >
          <Toolbar disableGutters={!open}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography className={classes.title} variant="h6" color="inherit" noWrap>
              My Friends
            </Typography>
              <div className={classes.grow} />
              <div className={classes.search}>
              <div className={classes.searchIcon}>
              <SearchIcon />
              </div>
              <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              />
          </div>    
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={this.handleDrawerClose}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </div>
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
          </List>
        </Drawer>
        <Grid className={classes.friendCardYo} container spacing={16} justify='flex-start'>
          {mapAllFriends}
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(ListFriends);