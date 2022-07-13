import React from "react";
import { useNavigate } from "react-router-dom";
const VerticleCard = ({ product }) => {
    const navigate = useNavigate();
    const { image, productName, stock, price, ratings, percantage, discountPrice, id } = product;

    const handleCard = (id) => {
        navigate(`/productDetails/${id}`)
    }
    return (
        <div className="product-card border relative hover:border-[#F94073] transition-all duration-400 max-w-[246px]">
            <img src={image} className="product-img" />
            <div className="p-4">
                <h3 className="font-medium mb-2">{productName}</h3>
                <span className="font-bold text-sm text-emerald-500">{stock}</span>
                <div className="flex gap-1 my-1">
                    {
                        ratings.map(rating => <img src={rating.img1} />)
                    }
                </div>
                <div className="flex gap-2">
                    <h5><span className="font-bold text-[#F94073] text-xl">{discountPrice}</span></h5>
                    <h5><del className="font-medium text-[#12111163] text-xl">{price}</del></h5>
                </div>
                <button onClick={() => handleCard(id)} className="bg-yellow-400 w-full mt-2 font-medium rounded-full py-1">Add to Cart</button>
            </div>
            <h5 className="absolute top-5 left-3 bg-[#F94073] rounded py-1 w-10 flex justify-center items-center text-white text-[14px]">{percantage}</h5>

            <button className="like-btn opacity-0 absolute flex justify-center items-center rounded-full h-10 w-10 bg-[#2D3054] top-5 right-3 flex justify-center items-center text-[14px]"><img src="https://i.ibb.co/Q9HK0qp/heart-4.png" className="w-5 mt-1" /></button>
        </div>
    )
}
export default VerticleCard;