import React from "react";
import useProducts from "../hooks/useProducts";
import BestSellersProduct from "./BestSellersProduct";
const BestSellersProducts = () => {
    const [products] = useProducts();

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