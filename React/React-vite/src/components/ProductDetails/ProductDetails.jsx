import React from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {

    const data = useParams()
    console.log(data)

    return(
        <>

        <p>Hello World</p>


        </>
    )
}

export default ProductDetails