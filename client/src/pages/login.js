import React from 'react';
import { Link } from 'react-router-dom';
import API from '../utils/AuthAPI';
import Auth from '../utils/Auth';
// import {AuthContainer, AuthRow} from '../components/Grid/AuthGrid';
// import { Input, FormBtn } from '../components/AuthForm/AuthForm';

import NavBar from '../components/NavBar';

import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';


const styles = {
    card: {
        maxWidth: 500,
    },
    form: {
        paddingBottom: 20
    }
};


class Login extends React.Component {
    state = { 
        username: '',
        password: '',
    };

    handleInputChange = event => { 
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };


    handleFormSubmit = event => {
        event.preventDefault();
        if(this.state.username && this.state.password){
            API.login({
                username: this.state.username,
                password: this.state.password,
            })
            .then(res => {
                Auth.setToken(res.data.token);
                this.props.history.push(`/users`)
            })
            .catch(err => console.log(err));
        }
    };

    render() {
        const { classes } = this.props;
        return (
            <div styles={ styles }>
                <NavBar></NavBar>
                
                <Card className={ classes.card } style={{ textAlign: 'center' }}>
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom variant='h5' component='h2' style={{ textAlign: 'center' }}>
                            Login 
                        </Typography>
                        <form> 
                      
                            <div className= { classes.form }>
                                <TextField
                                    value={this.state.username}
                                    onChange={this.handleInputChange}
                                    name='username'
                                    placeholder='(required)'
                                    id='standard-name'
                                    label='User Name'
                                    margin='normal'
                                    variant="outlined"

                                />
                            
                            </div>
                            <div className= { classes.form }>
                                <TextField 
                                    value={this.state.password}
                                    onChange={this.handleInputChange}
                                    name='password'
                                    placeholder='(required)'
                                    id='standard-name'
                                    label='Password'
                                    margin='normal'
                                    variant="outlined"

                                />
                            </div>
                            <CardActions style={{justifyContent: 'center'}}>
                                <Link to='/user' style={{ textDecoration: 'none' }}>
                                    <Button variant='contained' size='medium' color='primary' onClick={this.handleFormSubmit}>
                                        Enter
                                    </Button>
                                </Link>
                            </CardActions>
                           
                        </form>
                    </CardContent>
                </Card>
            </div>
        )
    }
}
Login.propTypes = {
    classes: PropTypes.object.isRequired,
  };
export default withStyles(styles)(Login);
