import React, { useEffect, useState } from "react";
import Title from "../../components/Header/Title";
import Offer from "./Offer";
const SpecialOffers = () => {
    const [count, setCount] = useState(0);
    const [offers, setOffers] = useState([]);
    let n = 0;
    useEffect(() => {
        fetch('offers.json')
            .then(res => res.json())
            .then(data => setOffers(data))
    }, [])

    const handleIncrease = () => {
        console.log(n)
        if (count > 516) {
            setCount(0)
        }
        else {
            setCount(count + 258);
        }
    }
    /* setInterval(() => {
        handleIncrease()
    }, 2000) */
    /* setInterval(handleIncrease, 1000); */

    const handleDecrease = () => {
        if (count < 1) {
            setCount(0)
        }
        else {
            setCount(count - 258);
        }
    }






    return (
        <section id="offers" className="mt-8">
            <div className="max-w-[1280px] mx-auto overflow-hidden relative">
                <Title title={"Special Offers of the week"} subtitle={"Ut placerat, magna quis porttitor vulputate, magna nunc auctor ante."} />

                <div className={`flex w-[2400px] gap-3 transition-all duration-500`} style={{ marginLeft: `${-count}px` }}>
                    {
                        offers.map(offer => <Offer offer={offer} />)
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
