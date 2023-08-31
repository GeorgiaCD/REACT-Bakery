const Cake = ({name,imageSrc, ingredients, price,rating }) =>{

    // const handleRating = () =>{

    // }

    return(
        <>
            <h3 className="cake-name">{name} </h3>
            <img src={imageSrc} className="cake-images"></img>
            <p className="ingredients-title">Ingredients:</p>
            <ul className="ingredients-item">
                {ingredients.map((ingredients,index)=>(
                    <li key= {index}>{ingredients}</li>
                ))}
            </ul>
            <button className="basket-button">Add to basket</button>
            <p className="price">Price: £{price}</p>
            <p className="rating">Rating: {rating}/5</p>
            <hr></hr>
        </>
    )

}

export default Cake;