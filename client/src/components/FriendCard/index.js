import React, { Component } from "react";
import "./styles.css";
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const FriendStyles = theme => ({
    card: {
        maxWidth: 225,
        padding: 10
    },
    media: {
        height: 0,
        paddingTop: '100%', // 16:9
        borderRadius: "50%"
    }
});

class FriendCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
          justInCase: false //this is just in case we need state. 
        };
    };

 
   handleThisFriendsPageAndWishes = (e) => {
      e.preventDefault();
      function goToFriendsPage() {
        //input logic that will take you to friends page
        return console.log('This will take you to friends page and you should see their wishes');
      }
      return goToFriendsPage();

    }
    

    render() {
        const { classes } = this.props;
        return(
            <div id={this.props.myId} className="friend-card-container">
              <Card className={classes.card}>
              <CardMedia
                className={classes.media}
                image={this.props.FriendImageUrl}
              />
              <CardContent>
                <div className="friend-flex-center">
                  <Typography variant="h6">
                    {this.props.FriendName}
                  </Typography>
                </div>
                <div className="friend-flex-center">                
                  <Typography component="p">
                    {this.props.FriendBday}
                  </Typography>
                </div>
                <div className="friend-flex-center"> 
                  <Button variant="outlined" classes={classes.button} onClick={this.handleThisFriendsPageAndWishes}>
                    Wishes
                  </Button>
                </div>
                </CardContent>
            </Card>
          </div>
        );
    }
}

export default withStyles(FriendStyles)(FriendCard);