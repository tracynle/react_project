// ==== NEEDS IMPORT FROM REACT OR PAGE BREAK =====
import React, { Component } from "react";
import NavBar from '../components/NavBar';

// ===== BELOW IMPORTS OTHER COMPONENTS USED IN PAGE =====


// ===== HOLDS STATE, FUNCTIONS FOR PAGE, AND RENDER FUNCTION =====
class User extends Component {
    // === STATE ===

    // === GENERAL FUNCTIONS ===

    // === RENDER FUNCTION === 
    render() {
        return(
            <div>
                <NavBar></NavBar>
                User Route
            </div>
        );
    }
}

// ===== EXPORTS `User` PAGE RENDER FUNCTION =====
export default User;