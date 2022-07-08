import React, { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <nav className="py-4 bg-[#2D3054] text-white relative">
            <div className="container flex justify-between items-center">
                <Link to="/" className="font-bold text-2xl">Megadeals</Link>
                <div onClick={() => setOpen(!open)}>
                    {open ? <img src="https://i.ibb.co/4YGKSJ3/close-1.png" className="w-6" /> : <img src="https://i.ibb.co/vHq24rv/menu-1.png" className="w-6 lg:hidden cursor-pointer" />}
                </div>
                <ul className={`lg:flex lg:static lg:z-auto lg:w-auto lg:p-0 p-8 absolute right-0 font-medium text-lg gap-5 w-56 z-[-1] bg-[#2D3054] lg:transition-none transition-all duration-300 ease-in ${open ? 'top-[100%]' : 'top-[-170px]'}`}>
                    <li><a href="">Home</a></li>
                    <li><a href="">Shop</a></li>
                    <li><a href="">Products</a></li>
                    <li><a href="">Page</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
            </div>
        </nav>
    )
}
export default Navbar;