import React from 'react';
import AuthAPI from '../utils/AuthAPI';
import Auth from '../utils/Auth';
import {Col,AuthRow,AuthContainer} from '../components/Grid/AuthGrid';
import {Input, FormBtn} from "../components/AuthForm/AuthForm";
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

export default class SignUp extends React.Component{
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
        };
    }

handleDayClick(day){
    this.setState({birthday: day});
}

handleInputChange = event => { 
    const { name, value } = event.target; 
    this.setState({
    [name]: value
    
    });
    console.log('my name is!!!' + value)
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
    return (
    <AuthContainer fluid>
    <AuthRow>
    <Col size="offset-3 md-6">
    <form>

    <Input 
        value={this.state.username}
        onChange={this.handleInputChange}
        name="username"
        placeholder="Username (required)"
    />

    <Input
        value={this.state.password}
        onChange={this.handleInputChange}
        name="password"
        placeholder="Password (required)"
    />

    <Input 
        value={this.state.firstName}
        onChange={this.handleInputChange}
        name="firstName"
        placeholder="First Name"
    />

    <Input
    value={this.state.lastName}
    onChange={this.handleInputChange}
    name="lastName"
    placeholder="Last Name"
    />

    <Input 
    value={this.state.aboutMe}
    onChange={this.handleInputChange}
    name="aboutMe"
    placeholder='A few words about yourself!'
    />

    <DayPickerInput 
    name="birthday"
    onDayClick={this.handleDayClick} />
    {this.state.birthday ? (
        <p> is this your birthday?{this.state.birthday.toLocaleDateString()} </p>
    ) : (<p> please select your birthday </p>)
    }

    <FormBtn
    onClick={this.handleFormSubmit}
    >
    Sign up
    </FormBtn>

    </form>
    </Col>
    </AuthRow>
    </AuthContainer>
        );
    }
}

