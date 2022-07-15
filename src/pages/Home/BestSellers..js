import React from "react";
import { Link } from "react-router-dom";
import VerticleCard from "../../components/Header/VerticleCard";
import useProducts from "../../hooks/useProducts";
const BestSellers = () => {
    const [products] = useProducts();
    const minimuProducts = products.slice(0, 5)
    return (
        <section id="best-seller">
            <div className="container">
                <div className="mb-8 flex items-center justify-between">
                    <div>
                        <h3 className="title">Best Seller</h3>
                        <p className="sub-title">Do not miss the current offers until the end of month.</p>
                    </div>
                    <Link to="/bestSellersProducts" className="border px-6 py-1 text-lg">View All</Link>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 card">
                    {
                        minimuProducts.map(product => <VerticleCard product={product} />)
                    }
                </div>
            </div>
        </section>
    )
}
export default BestSellers;