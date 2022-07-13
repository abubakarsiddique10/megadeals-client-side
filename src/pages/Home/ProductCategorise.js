import React, { useEffect, useState } from "react";
import Card from "../../components/Header/Card";
import useProducts from "../../hooks/useProducts";

const ProductCategorise = () => {
    const [products, setProducts] = useProducts();
    const [filterItems, setFilterItems] = useProducts();
    const sliceItems = filterItems.slice(0, 6);
    const handleFilter = (category) => {
        const filterProducts = products.filter(products => products.category === category);
        setFilterItems(filterProducts)
    }
    const handleFilterAll = () => {
        const pro = products.map(product => product);
        setFilterItems(pro)

    }
    return (
        <section id="category" className="mt-5">
            <div className="container">
                <h1 className="font-medium text-2xl mb-3">Product Categorise</h1>
                <div className="flex gap-3">
                    <div className="w-[246px]">
                        <ul className="flex flex-col gap-y-1">
                            <li onClick={() => handleFilterAll()}>All Product</li>
                            <li onClick={() => handleFilter("beverages")}>Beverages</li>
                            <li onClick={() => handleFilter("meat&fish")}>Meat & Fish</li>
                            <li onClick={() => handleFilter("breakfast&dairy")}>Breakfast</li>
                            <li onClick={() => handleFilter("frozenfoods")}>Frozen Foods</li>
                            <li onClick={() => handleFilter("fruit&vegetables")}>Fruits & Vegetables</li>
                            <li onClick={() => handleFilter("breads&bakery")}>Breads & Bakery</li>
                        </ul>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        {
                            sliceItems.map((product, index) => <Card key={index} product={product} />)
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}
export default ProductCategorise;