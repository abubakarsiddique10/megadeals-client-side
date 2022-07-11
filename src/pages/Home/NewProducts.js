import React, { useEffect, useState } from "react";
import Title from "../../components/Header/Title";
import BestSellersProduct from "../BestSellersProduct";
import NewProduct from "../NewProduct";
const NewProducts = () => {
    const [featureProducts, setFeatureProducts] = useState([]);
    const minimuProducts = featureProducts.slice(0, 5)
    useEffect(() => {
        fetch('newProducts.json')
            .then(res => res.json())
            .then(data => setFeatureProducts(data))
    }, [])
    return (
        <section className="py-5">
            <div className="container">
                <Title btn={"View All"} title={"New Products"} subtitle={"New products with updated stocks."} />

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    {
                        minimuProducts.map(product => <NewProduct product={product} />)
                    }
                </div>
            </div>
        </section>
    )
}
export default NewProducts;