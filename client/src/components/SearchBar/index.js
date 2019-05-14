import React from 'react';
import PropTypes from 'prop-types';
import InputBase from '@material-ui/core/InputBase';
import { withStyles } from '@material-ui/core/styles';
import axios from "axios";


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
        .then(response => {
          // Redirect to results page to render etsy's results
          // Will be redirected to a new page and it will be pushed into the browser's history
          // the state contains the response and it is grabing the data that we need
          console.log(this.props);
          this.props.history.push({
            pathname:"/results",
            state:{
              items: response.data.results
             }
           });
          // this.setState({results: response.data.results})
        })
        .catch(function (error) {
          console.log(error);
        });
        
      }
    }
    
    // search bar component
    render() {
      return (
        <div>
          <InputBase 
            placeholder="Search…"
            classes={{
                root: this.props.classes.inputRoot,
                input: this.props.classes.inputInput,
            }}
            onKeyUp = { e => {this.doSomethingWithSearchTerms(e)} }
          />
        </div>
      )
    }
  


}

export default withStyles(styles)(SearchBar);
