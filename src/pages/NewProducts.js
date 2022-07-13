import React, { useEffect, useState } from "react";
import Card from "../components/Header/Card";
import useProducts from "../hooks/useProducts";


const NewProducts = () => {
    const [products, setPrducts] = useProducts();
    useEffect(() => {
        fetch('featureProducts.json')
            .then(res => res.json())
            .then(data => setPrducts(data))
    }, [])
    return (
        <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {
                    products.map(product => <Card product={product} />)
                }
            </div>
        </div>
    )
}
export default NewProducts;