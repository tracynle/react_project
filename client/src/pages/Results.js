// ==== NEEDS IMPORT FROM REACT OR PAGE BREAK =====
import React, { Component } from "react";

import NavBar from '../components/NavBar';
// ===== BELOW IMPORTS OTHER COMPONENTS USED IN PAGE =====


// ===== HOLDS STATE, FUNCTIONS FOR PAGE, AND RENDER FUNCTION =====
class Results extends Component {
    state = {
        items: []
    }
    

    // === RENDER FUNCTION === 
    // 
    render() {
        return(
            <div>
            <NavBar></NavBar>
                {this.props.location.state.items.map(item => { 
                    return (
                        <div>
                        {item.title}
                        </div>
                        
                    )

                })}
             
            </div>
        );
    }
}

// ===== EXPORTS `Results` PAGE RENDER FUNCTION =====
export default Results;