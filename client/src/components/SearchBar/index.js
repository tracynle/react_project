import React from 'react';
import PropTypes from 'prop-types';
import InputBase from '@material-ui/core/InputBase';
import { withStyles } from '@material-ui/core/styles';
import axios from "axios";

// To do: set the InputBase to accept values to be able to search for items by giving an attribute: onChange that thakes a function
// doSomethingWithSearchTerms
// Add onkey enter function yourself, bc Material UI doesn't have documentation
// check: https://reactjs.org/docs/events.html#keyboard-events

const styles = theme => ({
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
  });
  
class SearchBar extends React.Component {
    static propTypes = {
        classes: PropTypes.object.isRequired,
    }

   // Will show what user is typing in console
    doSomethingWithSearchTerms(event) {
      // condition for enter key
      if(event.keyCode === 13) {
        console.log(event.target.value);
        console.log("Enter was pressed!!");
        // Call the API to do the search to the server
        axios.get('/api/search/', {
          params: {
            item: event.target.value
          }
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
        
      }
    }
    
    // search bar
    render() {
      return (
        <InputBase 
          placeholder="Search…"
          classes={{
              root: this.props.classes.inputRoot,
              input: this.props.classes.inputInput,
          }}
          onKeyUp = { this.doSomethingWithSearchTerms }
        />
      )
    }
  


}

export default withStyles(styles)(SearchBar);

