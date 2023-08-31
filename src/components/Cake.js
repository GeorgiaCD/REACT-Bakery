const Cake = ({name,ingredients, price,rating }) =>{

    // const handleRating = () =>{

    // }

    return(
        <>
            <h3>{name} </h3>
            <p>Ingredients:</p>
            <ul>
                {ingredients.map((ingredients,index)=>(
                    <li key= {index}>{ingredients}</li>
                ))}
            </ul>
            <p>Price: £{price}</p>
            <p>Rating: {rating}</p>
        </>
    )


}

export default Cake;