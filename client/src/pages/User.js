// ==== NEEDS IMPORT FROM REACT OR PAGE BREAK =====
import React, { Component } from "react";
import NavBar from '../components/NavBar';

// ===== BELOW IMPORTS OTHER COMPONENTS USED IN PAGE =====


// ===== HOLDS STATE, FUNCTIONS FOR PAGE, AND RENDER FUNCTION =====
class User extends Component {

    // === RENDER FUNCTION === 
    render() {
        return(
            <div>
                <NavBar history={this.props.history}></NavBar>                
            </div>
        );
    }
}

// ===== EXPORTS `User` PAGE RENDER FUNCTION =====
export default User;