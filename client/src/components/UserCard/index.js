import React, { Component } from "react";
import "./styles.css";
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const UserStyles = theme => ({
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

class UserCard extends Component {
  render() {
        const { classes } = this.props;

        return(
            <div className="user-card-container">
              <Card className={classes.card}>
              <CardMedia
                className={classes.media}
                image={this.props.UserImageUrl}
              />
              <CardContent>
                <div className="user-flex-center">
                  <Typography variant="h6">
                    {this.props.UserName}
                  </Typography>
                </div>
                <div className="user-flex-center">                
                  <Typography component="p">
                    {this.props.UserBday}
                  </Typography>
                </div>
                <div className="user-flex-center"> 
                  <em>               
                    <Typography component="p">
                      {'"' + this.props.UserPhrase + '"'}
                    </Typography>
                  </em>
                </div>
                </CardContent>
            </Card>
          </div>
        );
    }
}

export default withStyles(UserStyles)(UserCard);