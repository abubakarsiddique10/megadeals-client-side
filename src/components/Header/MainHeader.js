import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductDetails from "./ProductDetails";
const MainHeader = () => {
    /* let count = 0;
    const [carts, setCarts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/carts')
            .then(res => res.json())
            .then(data => setCarts(data))
    }, []);
    const quantity = carts.map(cart => +cart.quantity);

    for (let i = 0; i < quantity.length; i++) {
        count = count + quantity[i]
    } */

    return (
        <section id="main-header" style={{ borderBottom: "1px solid #6e6767" }}>
            <div className="bg-[#2D3054] py-2">
                <div className={`container flex justify-between items-center`}>
                    <div>
                        <svg width="28" height="24" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.66669 18.9998V23.9998H22.3333V18.9998C22.3352 17.5223 22.8271 16.087 23.7318 14.9189C24.6366 13.7507 25.9032 12.9156 27.3333 12.5442V8.99984C27.3309 6.79046 26.4521 4.67229 24.8898 3.11002C23.3276 1.54776 21.2094 0.668985 19 0.666504H9.00002C6.79064 0.668985 4.67247 1.54776 3.1102 3.11002C1.54794 4.67229 0.669168 6.79046 0.666687 8.99984V12.5442C2.09683 12.9156 3.36344 13.7507 4.2682 14.9189C5.17296 16.087 5.6648 17.5223 5.66669 18.9998V18.9998ZM17.3333 7.33317C17.663 7.33317 17.9852 7.43092 18.2593 7.61405C18.5334 7.79719 18.747 8.05749 18.8731 8.36203C18.9993 8.66657 19.0323 9.00168 18.968 9.32499C18.9037 9.64829 18.7449 9.94526 18.5119 10.1783C18.2788 10.4114 17.9818 10.5702 17.6585 10.6345C17.3352 10.6988 17.0001 10.6658 16.6955 10.5396C16.391 10.4135 16.1307 10.1999 15.9476 9.92579C15.7644 9.6517 15.6667 9.32947 15.6667 8.99984C15.6667 8.55781 15.8423 8.13389 16.1548 7.82133C16.4674 7.50876 16.8913 7.33317 17.3333 7.33317V7.33317ZM17.3333 12.3332C17.663 12.3332 17.9852 12.4309 18.2593 12.6141C18.5334 12.7972 18.747 13.0575 18.8731 13.362C18.9993 13.6666 19.0323 14.0017 18.968 14.325C18.9037 14.6483 18.7449 14.9453 18.5119 15.1783C18.2788 15.4114 17.9818 15.5702 17.6585 15.6345C17.3352 15.6988 17.0001 15.6658 16.6955 15.5396C16.391 15.4135 16.1307 15.1999 15.9476 14.9258C15.7644 14.6517 15.6667 14.3295 15.6667 13.9998C15.6667 13.5578 15.8423 13.1339 16.1548 12.8213C16.4674 12.5088 16.8913 12.3332 17.3333 12.3332V12.3332ZM10.6667 7.33317C10.9963 7.33317 11.3186 7.43092 11.5926 7.61405C11.8667 7.79719 12.0803 8.05749 12.2065 8.36203C12.3326 8.66657 12.3656 9.00168 12.3013 9.32499C12.237 9.64829 12.0783 9.94526 11.8452 10.1783C11.6121 10.4114 11.3151 10.5702 10.9918 10.6345C10.6685 10.6988 10.3334 10.6658 10.0289 10.5396C9.72434 10.4135 9.46404 10.1999 9.2809 9.92579C9.09777 9.6517 9.00002 9.32947 9.00002 8.99984C9.00002 8.55781 9.17561 8.13389 9.48817 7.82133C9.80073 7.50876 10.2247 7.33317 10.6667 7.33317V7.33317ZM10.6667 12.3332C10.9963 12.3332 11.3186 12.4309 11.5926 12.6141C11.8667 12.7972 12.0803 13.0575 12.2065 13.362C12.3326 13.6666 12.3656 14.0017 12.3013 14.325C12.237 14.6483 12.0783 14.9453 11.8452 15.1783C11.6121 15.4114 11.3151 15.5702 10.9918 15.6345C10.6685 15.6988 10.3334 15.6658 10.0289 15.5396C9.72434 15.4135 9.46404 15.1999 9.2809 14.9258C9.09777 14.6517 9.00002 14.3295 9.00002 13.9998C9.00002 13.5578 9.17561 13.1339 9.48817 12.8213C9.80073 12.5088 10.2247 12.3332 10.6667 12.3332V12.3332Z" fill="#029FAE" />
                        </svg>
                    </div>
                    <div className="w-full max-w-[400px] relative">
                        <input type="text" placeholder="Search" className="w-full py-1 px-4 rounded" />
                        <img className="w-6 absolute top-[5px] right-[15px]" src="https://cdn.iconscout.com/icon/premium/png-256-thumb/search-1511218-1279309.png" />
                    </div>
                    <div className="flex gap-7 items-center px-5 py-2 rounded relative">
                        <div>

                        </div>
                        <img className="w-[22px] user cursor-pointer" src="https://i.ibb.co/T4k0H2n/user-1.png" />
                        <img src="https://i.ibb.co/JFxcr2R/heart-5.png" />
                        <Link to="/proceed" className="cursor-pointer">
                            <img src="https://i.ibb.co/wBY6N5f/bag-1.png" />
                        </Link>
                        <span className="absolute bg-red-500 h-6 w-6 rounded-full text-white flex justify-center items-center top-0 right-[7px] font-medium ">{0}</span>
                        <span className="absolute bg-red-500 h-6 w-6 rounded-full text-white flex justify-center items-center top-1 left-[85px] font-medium ">3</span>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default MainHeader;