// ==== NEEDS IMPORT FROM REACT OR PAGE BREAK =====
import React, { Component } from "react";
import UserBanner from "../components/UserBanner";

// ===== BELOW IMPORTS OTHER COMPONENTS USED IN PAGE =====

// ===== HOLDS STATE, FUNCTIONS FOR PAGE, AND RENDER FUNCTION =====
// <UserBanner history={this.props.history} 
// (condition:) items={this.props.location.state ? (if statement:)this.props.location.state.items : (else:) []}/>
// condition: we want to have the items be redirected to user page. 
// if statement: if the redirected page has state
// if there is, use the items in state
// else: otherwise put in an empty array
// refer to searchBar.js 
class User extends Component {

    // === RENDER FUNCTION === 
    render() {
        return(
            <div>
                <UserBanner
                    history={this.props.history}
                    key={this.props.location.items ? this.props.location.items[0].listing_id : "anything"}
                    items={this.props.location.items ? this.props.location.items : []}/>
            </div>
        );
    }
}

// ===== EXPORTS `User` PAGE RENDER FUNCTION =====
export default User;