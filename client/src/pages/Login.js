import React, { Component } from "react";
import { Link } from 'react-router-dom';
import API from "../utils/API";
import Auth from '../utils/Auth';
import {AuthContainer, AuthRow, Col} from "../components/Grid/AuthGrid";
import { Input, FormBtn } from "../components/AuthForm";

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
                <Col size = "md-6">
                <form> 
                    <Input
                    value={this.state.username}
                    onChange={this.handleInputChange}
                    name="username"
                    placeholderd="Username (required)"
                    />

                    <Input 
                    value={this.state.password}
                    onChange={this.handleInput}
                    name="password"
                    placeholderd="Password (required)"
                    />

                    <FormBtm 
                    disabled={!(this.state.username && this.state.password)}
                    onClick={this.handleFormSubmit}
                    >
                    Login
                    </FormBtm>
                </form>
                <Link to="/"> Home </Link>
                </Col>
            </AuthRow>
            </AuthContainer>
            </div>
        )
    }
}

export default Login;