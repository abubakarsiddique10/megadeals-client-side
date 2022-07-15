import React, { useEffect, useState } from "react";
const ProceedCheckout = () => {
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/carts')
            .then(res => res.json())
            .then(data => setCart(data))
    }, []);

    return (
        <div className="container">
            <h1>ProceedCheckout{cart.length}</h1>
        </div>
    )
}
export default ProceedCheckout;