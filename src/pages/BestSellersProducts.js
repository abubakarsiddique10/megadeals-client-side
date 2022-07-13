import React from "react";
import VerticleCard from "../components/Header/VerticleCard";
import useProducts from "../hooks/useProducts";
const BestSellersProducts = () => {
    const [products] = useProducts();

    return (
        <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
                {
                    products.map(product => <VerticleCard product={product} />)
                }
            </div>
        </div>
    )
}
export default BestSellersProducts;