import { useState } from "react";
import Cake from "../components/Cake";

const BakeryContainer = () =>{

    return (
        <>
            <h2>Cakes</h2>
            <Cake 
                name = {"Victoria Sponge"}
   	            ingredients = {["eggs, ", "butter, ","sugar, ","self-raising flour, ", "baking powder, ","milk "]}
  	            price = {5}
   	            rating = {5} />
            <Cake 
                name = {"Tea loaf"}
                ingredients ={["eggs, ","oil, ","dried fruit, ", "sugar, ","self-raising flour, ","strong tea "] }
                price= {2}
                rating={3} />
            <Cake 
                name = {"Carrot Cake"}
                ingredients ={ ["carrots, ","walnuts, ","oil, ", "cream cheese, ", "flour, ","sugar "]}
                price= {8}
                rating={5}/>
        
        </>
    )


}


export default BakeryContainer;