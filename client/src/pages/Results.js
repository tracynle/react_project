// ==== NEEDS IMPORT FROM REACT OR PAGE BREAK =====
import React, { Component } from "react"; // imports the component "Component" from react's "Component.js" file
import ProductCard from "../components/ProductCard";
import NavBar from '../components/NavBar';
// ===== BELOW IMPORTS OTHER COMPONENTS USED IN PAGE =====


// ===== HOLDS STATE, FUNCTIONS FOR PAGE, AND RENDER FUNCTION =====
class Results extends Component {
    state = {
        items: []
    }

    // === RENDER FUNCTION ===  
    render() {
        return(
            <div>
            <NavBar></NavBar>
                {this.props.location.state.items.map(item => { 
                    return (
                       <ProductCard
                            key={item.listing_id}
                            listing_id={item.listing_id}
                            title={item.title}
                            tags={item.tags}
                            price={item.price}
                            description={item.description}
                        />
                    )
                })}
            </div>
        );
    }
}

// ===== EXPORTS `Results` PAGE RENDER FUNCTION =====
export default Results;
