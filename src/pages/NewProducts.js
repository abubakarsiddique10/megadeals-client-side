import React, { useEffect, useState } from "react";
import NewProduct from "./NewProduct";
const NewProducts = () => {
    const [products, setPrducts] = useState([]);
    useEffect(() => {
        fetch('featureProducts.json')
            .then(res => res.json())
            .then(data => setPrducts(data))
    }, [])
    return (
        <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {
                    products.map(product => <NewProduct product={product} />)
                }
            </div>
        </div>
    )
}
export default NewProducts;