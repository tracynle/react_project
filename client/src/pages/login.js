import React, { Component } from "react";
import { Link } from 'react-router-dom';
import API from "../utils/AuthAPI";
import Auth from '../utils/Auth';
import {AuthContainer, AuthRow} from "../components/Grid/AuthGrid";
import { Input, FormBtn } from "../components/AuthForm/AuthForm";


const styles = {
    marginTop: "50px"     
}

class Login extends Component {
    state = { 
        username: "",
        password: "",
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
                this.props.history.push(`/home`)
            })
            .catch(err => console.log(err));
        }
    };

    render() {
        return (
            <div styles={styles}>
            <AuthContainer fluid>
            <AuthRow>
                <form> 
                    <Input
                    value={this.state.username}
                    onChange={this.handleInputChange}
                    name="username"
                    placeholderd="Username (required)"
                    />

                    <Input 
                    value={this.state.password}
                    onChange={this.handleInputChange}
                    name="password"
                    placeholderd="Password (required)"
                    />

                    <FormBtn 
                    disabled={!(this.state.username && this.state.password)}
                    onClick={this.handleFormSubmit}
                    >
                    Login
                    </FormBtn>
                </form>
                <Link to="/"> Home </Link>
            </AuthRow>
            </AuthContainer>
            </div>
        )
    }
}

export default Login;