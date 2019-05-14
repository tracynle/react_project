import React from 'react';
import AuthAPI from '../utils/AuthAPI';
import Auth from '../utils/Auth';
import { Link } from 'react-router-dom';

import 'react-day-picker/lib/style.css';

import NavBar from '../components/NavBar';

import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';


const styles = {
    card: {
        maxWidth: 600,
        height: 550
    },
    user: {
        paddingBottom: 20,
        paddingTop: 10,
    },
    form: {
        paddingTop: 10,
        paddingBottom: 20,
        padding: 10,
        spacing: 20,

    },
    about: {
        width: 400
    },
    birthdate: {
        width: 400
    },
    
};

class SignUp extends React.Component{
    constructor(props){
        super(props);
                this.handleDayClick = this.handleDayClick.bind(this);
                this.state = {
                username: "",
                password: "",
                firstName: "",
                lastName: "",
                aboutMe: "",
                birthday: undefined,
                redirect: false,
                showPassword: false,

            };
    }
    handleChange = prop => event => {
        this.setState({ [prop]: event.target.value });
      };
    
      handleClickShowPassword = () => {
        this.setState(state => ({ showPassword: !state.showPassword }));
      };
    
    handleDayClick(day){
        this.setState({birthday: day});
    }

    handleInputChange = event => { 
        const { name, value } = event.target; 
            this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
            if (this.state.username && this.state.password) {
            AuthAPI.signup({
                username: this.state.username,
                password: this.state.password,
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                aboutMe: this.state.aboutMe,
                birthday: this.state.birthday
            })
            .then(res => {
                Auth.setToken(res.data.token);
                this.props.history.push('/user')
                console.log(res.data.token)
            })
            .catch(err => console.log(err));
        };
    }

    render() {
        const { classes } = this.props;

        return (
            <div styles={ styles }>
                <NavBar></NavBar>
                <Card className={ classes.card }>
                    <CardContent>
                        
                        <Typography gutterBottom variant='h5' component='h2' color='textSecondary' style={{ textAlign: 'center' }}>
                            Sign Up with Wish List
                        </Typography>
                        <form>
                           
                            <div className= {(classes.form, classes.user) } style={{ textAlign: 'center' }} >
                                <TextField 
                                    value={this.state.firstName}
                                    variant="outlined"
                                    onChange={this.handleInputChange}
                                    name="firstName"
                                    label="First Name"
                                    /> 
                                    <TextField
                                        value={this.state.lastName}
                                        variant="outlined"
                                        onChange={this.handleInputChange}
                                        label="Last Name"
                                        name="lastName"
                                    />
                            </div>
                            <div className= {(classes.form, classes.user) } style={{ textAlign: 'center' }} >
                            
                                <TextField
                                    value={this.state.username}
                                    variant="outlined"
                                    onChange={this.handleInputChange}
                                    name="username"
                                    label="User Name"
                                    placeholder="(required)"
                                />
                                <TextField
                                    id="outlined-adornment-password"
                                    className={(classes.margin, classes.textField)}
                                    variant="outlined"
                                    type={this.state.showPassword ? 'text' : 'password'}
                                    label="Password"
                                    value={this.state.password}
                                    onChange={this.handleChange('password')}
                                  
                                />
                        
                            </div>
                            <div className= { classes.form } style={{ textAlign: 'center' }}>
                                <TextField
                                    className= { classes.about }
                                    value={this.state.aboutMe}
                                    onChange={this.handleInputChange}
                                    variant="outlined"
                                    name="aboutMe"
                                    label="About You"
                                    multiline
                                    rows="4"
                                    placeholder='Write a few words about yourself'
                                />
                            </div>
                            <div className= { classes.form } style={{ textAlign: 'center' }}>
                                <TextField
                                    variant="outlined"
                                    id="date"
                                    label="Birthday"
                                    type="date"
                                    defaultValue="2017-05-24"
                                    className={classes.birthdate}
                                    InputLabelProps={{
                                    shrink: true,
                                    }}
                                />
                                <Button
                                    variant="contained"
                                    component="label"
                                    >
                                    Upload File
                                    <input
                                        type="file"
                                        style={{ display: "none" }}
                                    />
                                </Button>

                            </div>
                            <CardActions style={{justifyContent: 'center'}}>
                                <Link to='/user' style={{ textDecoration: 'none' }} >
                                    <Button variant='contained' size='medium' color='primary' onClick={this.handleFormSubmit} >
                                        Enter
                                    </Button>
                                </Link>
                            </CardActions>
                        </form>
                    </CardContent>
                </Card>                    
            </div>
        );
    }
}

SignUp.propTypes = {
    classes: PropTypes.object.isRequired,
  };

  
export default withStyles(styles)(SignUp);
