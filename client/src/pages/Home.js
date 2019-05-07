// ==== NEEDS IMPORT FROM REACT OR PAGE BREAK =====
import React, { Component } from "react"; // imports the component "Component" from react's "Component.js" file
import { AuthContainer, AuthRow, Col } from "../components/Grid/AuthGrid";
import {Link} from "react-router-dom"

// ===== BELOW IMPORTS OTHER COMPONENTS USED IN PAGE =====


// ===== HOLDS STATE, FUNCTIONS FOR PAGE, AND RENDER FUNCTION =====

    // === GENERAL FUNCTIONS ===

    // === RENDER FUNCTION  === 
    function Home(props){
        return(
            <AuthContainer fluid>
            <AuthRow>
            <Col size="offset-2 md-4">
            <Link to="/sign up">Sign up to our cool ass website</Link>
            </Col>
            
            <Col size="offset-2 md-4">
            <Link to="/Login">Login to our cool ass website</Link>
            </Col>
            

            </AuthRow>
            </AuthContainer>

        )
    }


// ===== EXPORTS `About` PAGE RENDER FUNCTION =====
export default Home;