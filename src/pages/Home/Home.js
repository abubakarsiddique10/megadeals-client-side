import React from "react";
import Banner from "./Banner";
import BestSellers from "./BestSellers.";
import NewProducts from "./NewProducts";
import SpecialOffers from "./SpecialOffers";
const Home = () => {
    return (
        <>
            <Banner />
            <SpecialOffers />
            <BestSellers />
            <NewProducts />
        </>
    )
}
export default Home;