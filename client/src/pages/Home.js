// ==== NEEDS IMPORT FROM REACT OR PAGE BREAK =====
import React, { Component } from "react"; // imports the component "Component" from react's "Component.js" file

// ===== BELOW IMPORTS OTHER COMPONENTS USED IN PAGE =====


// ===== HOLDS STATE, FUNCTIONS FOR PAGE, AND RENDER FUNCTION =====
class Home extends Component {
    // === STATE ===
    state = {
        // === example === 
        //propertyName1: String,
        //property2: Boolean,
        //property3: Number,
        //property4: [Array],
        //property5: ?? Object ??

    };
    // === GENERAL FUNCTIONS ===
    randomArray = [" yaga ", " yeet ", " yonkers ", " bonkers "];
    // === RENDER FUNCTION  === 
    render() {
        return(
            <div>
                Home
            </div>
        );
    }   
}


// ===== EXPORTS `About` PAGE RENDER FUNCTION =====
export default Home;