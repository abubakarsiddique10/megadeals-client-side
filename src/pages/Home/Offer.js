import React from "react";
const Offer = ({ offer }) => {
    const { image, name, stock, price, rating, discount } = offer;

    return (
        <div className="border relative hover:border-[#F94073] transition-all duration-400 w-[246px]">
            <img src={image} className="product-img" />
            <div className="p-4">
                <h3 className="font-medium mb-2">{name}</h3>
                <span className="font-bold text-sm text-emerald-500">{stock}</span>
                <div className="flex gap-1 my-1">
                    <img src={rating} />
                    <img src={rating} />
                    <img src={rating} />
                    <img src={rating} />
                </div>
                <h5>Price <span className="font-medium">{price}</span></h5>
                <button className="bg-yellow-400 w-full mt-2 font-medium rounded-full py-1">Add to Cart</button>
            </div>
            <h5 className="absolute top-5 left-3 bg-[#F94073] rounded py-1 w-10 flex justify-center items-center text-white text-[14px]">{discount}</h5>
        </div>
    )
}
export default Offer;
<div className="border w-[246px]">
    <img src="https://i.ibb.co/wQ1FRB1/product-image-62-346x310.jpg" className="" />
</div>
