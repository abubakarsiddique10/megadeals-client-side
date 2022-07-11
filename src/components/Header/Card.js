import React from "react";
const Card = ({ product }) => {
    const { productName, categorise, discountPrice, percantage, ratings, price, stock, subImg, image } = product;

    return (
        <div className="product-card border relative hover:border-[#F94073] transition-all duration-400 flex">
            <img src={image} className="h-[100px] my-auto" />
            <div className="py-4 pr-3">
                <h3 className="font-medium mb-2">{productName}</h3>
                <span className="font-bold text-sm text-emerald-500">{stock}</span>
                <div className="flex gap-1 my-1">
                    {
                        ratings.map((rating, index) => <img src={rating.img1} />)
                    }
                </div>
                <h5>Price <span className="font-medium">{price}</span></h5>

            </div>
            <h5 className="absolute top-7 left-4 rounded-full py-[2px] w-10 h-10 flex justify-center items-center text-white bg-[#F94073] text-[14px]">{discountPrice}</h5>

            <div className="absolute right-3 top-[72px] flex flex-col gap-y-2">
                <button className="like-btn flex opacity-0 justify-center items-center rounded-full h-7 w-7 bg-[#2D3054] flex text-[14px]"><img src="https://i.ibb.co/Q9HK0qp/heart-4.png" className="w-3 mt-1" /></button>
                <button className="like-btn flex opacity-0 justify-center items-center rounded-full h-7 w-7 bg-[#2D3054] flex text-[14px]"><img src="https://i.ibb.co/qpWyLWN/shopping-cart-1.png" className="w-3 mt-1" /></button>
            </div>
        </div>
    )
}
export default Card;