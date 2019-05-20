// ==== NEEDS IMPORT FROM REACT OR PAGE BREAK =====
import React, { Component } from "react";
import FriendBanner from '../components/FriendBanner';


// ===== BELOW IMPORTS OTHER COMPONENTS USED IN PAGE =====


// ===== HOLDS STATE, FUNCTIONS FOR PAGE, AND RENDER FUNCTION =====
class Friends extends Component {
    // === STATE ===
    
    // === GENERAL FUNCTIONS ===

    // === RENDER FUNCTION === 
    render() {
        return(
            <div>
                <FriendBanner />
            </div>
        );
    }
}


// ===== EXPORTS `Friends` PAGE RENDER FUNCTION =====
export default Friends;