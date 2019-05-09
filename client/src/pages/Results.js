// ==== NEEDS IMPORT FROM REACT OR PAGE BREAK =====
import React, { Component } from "react"; // imports the component "Component" from react's "Component.js" file
import ProductCard from "../components/ProductCard/index";

// ===== BELOW IMPORTS OTHER COMPONENTS USED IN PAGE =====


// ===== HOLDS STATE, FUNCTIONS FOR PAGE, AND RENDER FUNCTION =====
class Results extends Component {
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
        // this is a test array, replace with etsy tag array logic
        randomArray = [" yaga ", " yeet ", " yonkers ", " bonkers "];
    // === RENDER FUNCTION  === 
    render() {
        return(
            <div>
                <ProductCard 
                    title={"Marvel Legos"}  
                    imageUrl={"http://gameranx.com/wp-content/uploads/2016/02/Lego-Marvels-Avengers-K-Wallpaper.jpg"}
                    description={"This is the marvel lego set that was the original one with wolverine and iron man from the first Avengers movie"}
                    price={500}
                    etsyTags={this.randomArray}
                />
                <ProductCard 
                    title={"Marvel Legos"}  
                    imageUrl={"http://gameranx.com/wp-content/uploads/2016/02/Lego-Marvels-Avengers-K-Wallpaper.jpg"}
                    description={"This is the marvel lego set that was the original one with wolverine and iron man from the first Avengers movie"}
                    price={500}
                    etsyTags={this.randomArray}
                />
                <ProductCard 
                    title={"Marvel Legos"}  
                    imageUrl={"http://gameranx.com/wp-content/uploads/2016/02/Lego-Marvels-Avengers-K-Wallpaper.jpg"}
                    description={"This is the marvel lego set that was the original one with wolverine and iron man from the first Avengers movie"}
                    price={500}
                    etsyTags={this.randomArray}
                />
            </div>
        );
    }   
}


// ===== EXPORTS `About` PAGE RENDER FUNCTION =====
export default Results;