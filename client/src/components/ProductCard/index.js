import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames'; // not sure what this does
import Card from '@material-ui/core/Card';

import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';

import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import white from '@material-ui/core/colors/common';
import FavoriteIcon from '@material-ui/icons/Favorite';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import axios from 'axios';

const styles = theme => ({
  card: {
    maxWidth: 250,
    margin: "10px",
  },
  media: {
    height: 0,
    paddingTop: '100%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  isLoved: {
    color: red[500],
  },
  isNotLoved: {
    color: white 
  },
  productCardTitle: {
    padding: "0px"
  },
  favAndPricePadding: {
    padding: "0px"
  }
});

class ProductCard extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      expanded: false,
      loved: false,
      image: ""
    };
  };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  handleLovedClick = () => {
    this.setState(state => ({ loved: !state.loved}));
    this.isLoveClicked();
  }

  isLoveClicked = () => {
    if (!this.state.loved) {
      console.log("I am loved!");
      // post to users loved products list and update the database.
        /*
          image
          title
          description
          price
          tags
        */
    } else {
      console.log("I am not loved!");
      // delete from users loved products list and update the database.
        /*
          image
          title
          description
          price
          tags
        */
    }
  }

  // Make an Ajax call to retrieve Etsy's images
  // Images will be rendered onto User's page
  // save in userbanner.
  // this setState will update into new cards and update the state

  componentDidMount = () => {
    axios.get('/api/images', {
      params: {
        item: this.props.listing_id
      }
    })
    .then(response => {
      const imageUrl = response.data.results[0].url_fullxfull;
      this.setState({
        image: imageUrl
      })
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
      <Card id={this.props.userId} className={classes.card}>
        <CardMedia
          className={classes.media}
          image={this.state.image}
          title={this.props.title}
        />
        <CardContent className={classes.productCardTitle}>
          <Typography variant="h6">
            {this.props.title}
          </Typography>
        </CardContent>
        <CardActions className={classes.actions && classes.favAndPricePadding} disableActionSpacing>
          <IconButton className={classnames(
            classes.isNotLoved, {
            [classes.isLoved]: this.state.loved
          })}
          onClick={this.handleLovedClick}
          aria-label="Add to your list!" 
          >
            <FavoriteIcon />
          </IconButton>
          <Typography variant='h6'>
            {"$" + parseFloat(this.props.price)}
          </Typography>
          <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: this.state.expanded,
            })}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography variant='h6'>Description:</Typography>
            <Typography component="p">
            {this.props.description}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
      </div>
    );
  }
}

ProductCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductCard);