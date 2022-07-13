import React, { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <nav className="py-4 bg-[#2D3054] text-white  overflow-hidden">
            <div className="container flex justify-between items-center">
                <Link to="/" className="font-bold text-2xl">Megadeals</Link>
                <div onClick={() => setOpen(!open)}>
                    {open ? <img src="https://i.ibb.co/4YGKSJ3/close-1.png" className="w-6" /> : <img src="https://i.ibb.co/vHq24rv/menu-1.png" className="w-6 lg:hidden cursor-pointer" />}
                </div>
                <ul className={`lg:flex lg:static lg:z-[1] z-[-1] lg:mt-0 lg:w-auto lg:p-0 p-8 absolute right-0 top-[100%] font-medium text-lg gap-5 w-56 bg-[#2D3054] lg:transition-none transition-all duration-500 ease-in ${open ? "mt-0" : "mt-[-232px]"}`}>
                    <li><a href="">Home</a></li>
                    <li><a href="">Shop</a></li>
                    <li><Link to="/dashboard">Dashboard</Link></li>
                    <li><a href="">Page</a></li>
                    <li><a href="">About</a></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
        </nav>
    )
}
export default Navbar;