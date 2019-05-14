import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import {Link} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  card: {
    maxWidth: 600,
    height: 550,

  },
  media: {
    height: 370,
  },
  button: {
    margin: theme.spacing.unit,
  },
});

function MediaCard(props) {
  const { classes } = props;
  return (
    <Grid
      container
      justify='center'
      alignItems='center'
    >
      <Card className={classes.card} style={{ textAlign: 'center' }}>
        
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image='../../../images/birthdaycake.jpg'
              title='Birthday Cake'
            />
            <CardContent>
              <Typography gutterBottom variant='h5' component='h2'>
              Welcome to Wishlist!
              </Typography>
              <Typography component='p'>
              Making Birthdays Memorable
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions style={{ textAlign: 'center' }}>
          <Grid
            container
            direction='row'
            justify='center'
            alignItems='center'
          >
            <Link to='/login' style={{ textDecoration: 'none' }}>
              <Button className={classes.button} variant='contained' size='medium' color='primary' >
                Login
              </Button>
            </Link>
            <Link to='/signup' style={{ textDecoration: 'none' }}>
              <Button className={classes.button} variant='contained' size='medium' color='primary'>
                Signup
              </Button>
            </Link>
          </Grid>
          </CardActions>
      
      </Card>
    </Grid>
  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);
