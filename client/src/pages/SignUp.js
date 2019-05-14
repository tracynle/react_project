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
        this.handleDayChange = this.handleDayChange.bind(this);
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

handleDayChange(day){
    this.setState({birthday: day});
}

handleInputChange = event => { 
    const { name, value } = event.target; 
    this.setState({
    [name]: value
    
    });
    console.log('my name is!!!' + this.state.value)
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
    this.props.history.push('/User')
    console.log(res.data.token)
    })
    .catch(err => console.log(err));
    };
    }

    render() {
        const {birthday} = this.state;
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
    {birthday && <p>Day: {birthday.toLocaleDateString()}</p>}
    {!birthday && <p>Please choose a date</p>}
    <DayPickerInput onDayChange={this.handleDayChange}/>

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

