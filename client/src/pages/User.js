// ==== NEEDS IMPORT FROM REACT OR PAGE BREAK =====
import React, { Component } from "react";
import UserBanner from "../components/UserBanner/index";
// ===== BELOW IMPORTS OTHER COMPONENTS USED IN PAGE =====

// ===== HOLDS STATE, FUNCTIONS FOR PAGE, AND RENDER FUNCTION =====
class User extends Component {
    // === STATE ===

    // === GENERAL FUNCTIONS ===

    // === RENDER FUNCTION === 
    render() {
        return(
            <div>
                <UserBanner />
            </div>
        );
    }
}

// ===== EXPORTS `User` PAGE RENDER FUNCTION =====
export default User;