import React from "react";
import Banner from "./Banner";
import BestSellers from "./BestSellers.";
import NewProducts from "./NewProducts";
import ProductCategorise from "./ProductCategorise";
import SpecialOffers from "./SpecialOffers";
const Home = () => {
    return (
        <>
            <Banner />
            <SpecialOffers />
            <ProductCategorise />
            <BestSellers />
            <NewProducts />
        </>
    )
}
export default Home;