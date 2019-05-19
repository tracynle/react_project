/**TRACY --- this is where I started off for creating the wishlist cards
i'm not sure if the axios calls for pulling the information from the database should 
be in this component or passed in through props. I can start on this tomorrow 
but if you want to take a stab at it, go for it. 
*/


// import React, { Component } from 'react';
// import { withStyles } from '@material-ui/core/styles';
// import classnames from 'classnames';
// import Card from '@material-ui/core/Card';
// import CardMedia from '@material-ui/core/CardMedia';
// import CardContent from '@material-ui/core/CardContent';
// import CardActions from '@material-ui/core/CardActions';
// import Collapse from '@material-ui/core/Collapse';
// import IconButton from '@material-ui/core/IconButton';
// import Typography from '@material-ui/core/Typography';
// import red from '@material-ui/core/colors/red';
// import white from '@material-ui/core/colors/common';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// //import axios to pull from userlikes aka wishes likes database
// import axios from 'axios';

// const styles = theme => ({
//     card: {
//         maxWidth: 250,
//         margin: "10px",
//     },
//     media: {
//         height: 0,
//         paddingTop: '100%', // 16:9
//     },
//     actions: {
//         display: 'flex',
//     },
//     expand: {
//         transform: 'rotate(0deg)',
//         marginLeft: 'auto',
//         transition: theme.transitions.create('transform', {
//             duration: theme.transitions.duration.shortest,
//         }),
//     },
//     expandOpen: {
//         transform: 'rotate(180deg)',
//     },
//     isLoved: {
//         color: red[500],
//     },
//     isNotLoved: {
//         color: white
//     },
//     productCardTitle: {
//         padding: "0px"
//     },
//     favAndPricePadding: {
//         padding: "0px"
//     }
// });

// class WishesCard extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             expanded: false,
//             image: [],
//             title: [],
//             price: [],
//             description: [],
//         };
//     };

//     handleExpandClick = () => {
//         this.setState(state => ({ expanded: !state.expanded }));
//     };

//     //get request and finds all where user id == current user and 
//     componentDidMount = () => {
//         axios.get(/* This needs to include the db like */, {
//             params: {
//                 item: this.props.listing_id
//             }
//         })
//         .then(response => {
//             const imageUrl = response.data.results[0].url_fullxfull;
//             this.setState({
//                 image: imageUrl
//             })
//         })
//         .catch(function (error) {
//             console.log(error);
//         })
//     }
// }

// export default withStyles(styles)(WishesCard);