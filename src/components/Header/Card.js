import React from "react";

const Card = ({ product }) => {
    const { productName, categorise, discountPrice, percantage, ratings, price, stock, subImg, image } = product;

    return (
        <div className="product-card border relative hover:border-[#F94073] transition-all duration-400 flex cursor-pointer">
            <img src={image} className="h-[100px] my-auto" />
            <div className="p-4">
                <h3 className="font-medium mb-2">{productName}</h3>
                <span className="font-bold text-sm text-emerald-500">{stock}</span>
                <div className="flex gap-1 my-1">
                    {
                        ratings.map((rating, index) => <img src={rating.img1} />)
                    }
                </div>
                <div className="flex gap-2 text-lg">
                    <h5><span className="font-bold text-[#F94073]">{discountPrice}</span></h5>
                    <h5><del className="font-medium text-[#12111163]">{price}</del></h5>
                </div>

            </div>
            <h5 className="absolute top-7 left-4 rounded-full py-[2px] w-9 h-9 flex justify-center items-center text-white bg-[#F94073] text-[13px]">{percantage}</h5>

            <div className="absolute right-4 top-[76px] flex flex-col gap-y-[10px]">
                <button className="like-btn flex opacity-1 justify-center items-center rounded-full h-7 w-7 bg-[#F5F5F5] flex text-[14px]"><img src="https://i.ibb.co/GJ37rGj/like.png" className="w-3 mt-1" /></button>
                <button className="like-btn flex opacity-1 justify-center items-center rounded-full h-7 w-7 bg-[#F5F5F5] flex text-[14px]"><img src="https://i.ibb.co/dcjSqGP/shopping-cart-2.png" className="w-3 mt-1" /></button>

            </div>
        </div>
    )
}
export default Card;