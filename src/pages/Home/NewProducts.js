import React, { useEffect, useState } from "react";
import Card from "../../components/Header/Card";
import { Link } from "react-router-dom";
import useProducts from "../../hooks/useProducts";

const NewProducts = () => {
    const [newProducts, setNewProducts] = useProducts();
    const minimuProducts = newProducts.slice(0, 6)
    useEffect(() => {
        fetch('newProducts.json')
            .then(res => res.json())
            .then(data => setNewProducts(data))
    }, [])
    return (
        <section id="new-products">
            <div className="container">
                <div className="mb-8 flex items-center justify-between">
                    <div>
                        <h3 className="title">New Products</h3>
                        <p className="sub-title">New products with updated stocks.</p>
                    </div>
                    <Link to="/newproducts" className="border px-6 py-1 text-lg font-medium">View All</Link>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3">
                    {
                        minimuProducts.map(product => <Card product={product} />)
                    }
                </div>
            </div>
        </section>
    )
}
export default NewProducts;