import React, { useEffect, useState } from "react";
import Title from "../../components/Header/Title";
import VerticleCard from "../../components/Header/VerticleCard";
import useProducts from "../../hooks/useProducts";

const SpecialOffers = () => {
    const [count, setCount] = useState(0);
    const [products, setProducts] = useProducts();
    const sliceProducts = products.slice(0, 5)

    // slider code
    useEffect(() => {
        fetch('offers.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const handleIncrease = () => {
        if (count > 516) {
            setCount(0)
        }
        else {
            setCount(count + 258);
        }
    }
    const handleDecrease = () => {
        if (count < 1) {
            setCount(0)
        }
        else {
            setCount(count - 258);
        }
    }
    // slider code

    return (
        <section id="offers">
            <div className="max-w-[1280px] mx-auto overflow-hidden relative">
                <div className="mb-8">
                    <h1 className="title">
                        Special Offers of the week
                    </h1>
                    <p className="sub-title">Ut placerat, magna quis porttitor vulputate, magna nunc auctor ante.</p>
                </div>

                <div className={`flex w-[2400px] gap-3 transition-all duration-500`} style={{ marginLeft: `${-count}px` }}>
                    {
                        sliceProducts.map(product => <VerticleCard product={product} />)
                    }
                </div>
                <div className="mt-5 arrow-btn flex justify-between w-full">
                    <button onClick={() => handleIncrease()}>
                        <img src="https://i.ibb.co/Tbt46bR/left-arrow.png" className="w-4" />
                    </button>
                    <button onClick={() => handleDecrease()}>
                        <img src="https://i.ibb.co/8KxfMM1/next.png" className="w-4" />
                    </button>
                </div>
            </div>
        </section>
    )
}
export default SpecialOffers;
