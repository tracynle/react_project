import React, { Component } from "react";
import "./styles.css";
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const FriendStyles = theme => ({
    card: {
        maxWidth: 300,
        padding: 10
    },
    media: {
        height: 0,
        paddingTop: '100%', // 16:9
        borderRadius: "50%"
    }
});

class FriendProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
          justInCase: false //this is just in case we need state. 
        };
    };

 
   handleWishClick = (e) => {
      e.preventDefault();
      return console.log('This should take you to the Friends page');
      //Below is where the 
    }
    

    render() {
        const { classes } = this.props;
        return(
            <div className="friend-profile-container">
              <Card className={classes.card}>
              <CardMedia
                className={classes.media}
                image={this.props.FriendImageUrl}
              />
              <CardContent>
                <div className="friend-profile-flex-center">
                  <Typography variant="h6">
                    {this.props.FriendName}
                  </Typography>
                </div>
                <div className="friend-profile-flex-center">                
                  <Typography component="p">
                    {this.props.FriendBday}
                  </Typography>
                </div>
                </CardContent>
            </Card>
          </div>
        );
    }
}

export default withStyles(FriendStyles)(FriendProfile);