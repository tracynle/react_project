// ==== NEEDS IMPORT FROM REACT OR PAGE BREAK =====
import React from "react"; // imports the component "Component" from react's "Component.js" file
import WelcomeCard from '../components/WelcomeCard';

// // === RENDER FUNCTION  === 

function renderHome(props){
    return(
        <div >
            <WelcomeCard></WelcomeCard>
        </div>
    )
}

// ===== EXPORTS `About` PAGE RENDER FUNCTION =====
export default renderHome;
