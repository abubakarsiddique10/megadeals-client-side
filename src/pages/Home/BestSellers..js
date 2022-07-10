import React from "react";
import Title from "../../components/Header/Title";
import useProducts from "../../hooks/useProducts";
import BestSellersProduct from "../BestSellersProduct";
const BestSellers = () => {
    const [products] = useProducts();
    const minimuProducts = products.slice(0, 5)
    return (
        <section className="py-5">
            <div className="container">
                <Title btn={"View All"} title={"Best Seller"} subtitle={"Do not miss the current offers until the end of month."} />

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                    {
                        minimuProducts.map(product => <BestSellersProduct product={product} />)
                    }
                </div>
            </div>
        </section>
    )
}
export default BestSellers;