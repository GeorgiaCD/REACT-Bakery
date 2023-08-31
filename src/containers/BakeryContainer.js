import { useState } from "react";
import Cake from "../components/Cake";

const BakeryContainer = () =>{

    return (
        <>
            <h2 className="cakes-section-title">Cakes</h2>
            <hr></hr>
            <Cake 
                name = {"Victoria Sponge"}
                imageSrc = "/vegan-sponge-cake.webp" 
   	            ingredients = {["eggs ", "butter ","sugar ","self-raising flour ", "baking powder ","milk "]}
  	            price = {5}
   	            rating = {5} />
            <Cake 
                name = {"Tea loaf"}
                imageSrc = "/tea-loaf.webp"
                ingredients ={["eggs ","oil ","dried fruit ", "sugar ","self-raising flour ","strong tea "] }
                price= {2}
                rating={3} />
            <Cake 
                name = {"Carrot Cake"}
                imageSrc = "/carrot-cake.webp"
                ingredients ={ ["carrots ","walnuts ","oil ", "cream cheese ", "flour ","sugar "]}
                price= {8}
                rating={5}/>
        
        </>
    )


}


export default BakeryContainer;