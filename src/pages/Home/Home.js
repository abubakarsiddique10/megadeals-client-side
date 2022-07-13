import React from "react";
import Banner from "./Banner";
import BestSellers from "./BestSellers.";
import NewProducts from "./NewProducts";
import ProductCategorise from "./ProductCategorise";
import SpecialOffers from "./SpecialOffers";
const Home = () => {
    return (
        <main className="z-[-1]">
            <Banner />
            <SpecialOffers />
            <ProductCategorise />
            <BestSellers />
            <NewProducts />
        </main>
    )
}
export default Home;