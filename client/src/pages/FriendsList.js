// ==== NEEDS IMPORT FROM REACT OR PAGE BREAK =====
import React, { Component } from "react";
import ListFriends from '../components/ListFriends/index';
// ===== BELOW IMPORTS OTHER COMPONENTS USED IN PAGE =====


// ===== HOLDS STATE, FUNCTIONS FOR PAGE, AND RENDER FUNCTION =====
class FriendsList extends Component {
    // === STATE ===

    // === RENDER FUNCTION === 
    render() {
        return(
            <ListFriends/>
        );
    }
}


// ===== EXPORTS `Friends` PAGE RENDER FUNCTION =====
export default FriendsList
