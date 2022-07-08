import React, { useEffect, useState } from "react";
import BestSellersProduct from "./BestSellersProduct";
const BestSellersProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                {
                    products.map(product => <BestSellersProduct product={product} />)
                }
            </div>
        </div>
    )
}
export default BestSellersProducts;