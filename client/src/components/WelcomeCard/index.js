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
    margin: 'auto',
    display: 'block',
    maxWidth: 600,
    maxHeight: 700,
    marginTop: 30,

  },
  button: {
    margin: theme.spacing.unit,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: 300,
    maxHeight: 300,
    marginBottom: 20,
    marginTop: 20,
    borderRadius: 20
  },
 
});


function MediaCard(props) {
  const { classes } = props;
  return (
    <div >
    <Grid item xs={6} sm container style={{ textAlign: 'center' }}>
      <Grid item xs container direction="column" spacing={16}>
      <Grid item xs>
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.image}
              title='Birthday Cake'
            />
            <CardContent>
              <Typography gutterBottom variant='h5' component='h2'>
                <img className={classes.img} alt="complex" src='../../../images/bluebdaycake.jpg'></img>
                  Welcome to Wishlist!
                <p>
                  <h6>
                    Making Birthdays Memorable
                  </h6>
                </p>
              </Typography>
              <Typography gutterBottom variant='h6'>
                Love celebrating birthdays? Create an account with us!
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
        </Grid>
      </Grid>
    </div>
      
  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);
