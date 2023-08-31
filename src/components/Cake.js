const Cake = ({name,ingredients, price,rating }) =>{

    // const handleRating = () =>{

    // }

    return(
        <>
            <h3>{name} </h3>
            <p>Ingredients: {ingredients}</p>
            <p>Price: {price}</p>
            <p>Rating: {rating}</p>
        </>
    )


}

export default Cake;