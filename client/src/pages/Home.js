// ==== NEEDS IMPORT FROM REACT OR PAGE BREAK =====
import React from "react"; // imports the component "Component" from react's "Component.js" file
import WelcomeCard from '../components/WelcomeCard';
import NavBar from '../components/NavBar';

// === RENDER FUNCTION  === 
function renderHome(props){
    return(
        <div>
        <NavBar history={props.history}></NavBar>
            <WelcomeCard></WelcomeCard>
        </div>
    )
}



// ===== EXPORTS `About` PAGE RENDER FUNCTION =====
export default renderHome;
