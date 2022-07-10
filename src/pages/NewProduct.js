import React from "react";
const NewProduct = ({ product }) => {
    const { name, rating, price, stock, discount, image } = product;
    return (
        <div className="border relative hover:border-[#F94073] transition-all duration-400">
            <img src={image} className="w-[200px] mx-auto" />
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
            <h5 className="absolute top-5 left-3 rounded py-1 w-10 flex justify-center items-center text-white bg-[#F94073] text-[14px]">{discount}</h5>
        </div>
    )
}
export default NewProduct;