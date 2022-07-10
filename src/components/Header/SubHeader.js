import React from "react";
import styles from '../../assets/styles/SubHeader.module.css';
import { Link } from "react-router-dom";
const SubHeader = () => {
    return (
        <div className="bg-[#272343] text-white py-3.5">
            <div className={`container flex justify-between`}>
                <div className="flex items-center gap-x-4">
                    <div>
                        <Link to="" className="ml-2">Help & Contact</Link>
                    </div>
                    <div>
                        <Link to="" className="ml-2">Order Tracking</Link>
                    </div>
                </div>
                <div className="flex gap-6 items-center">
                    <select className="bg-inherit">
                        <option>Eng</option>
                        <option>Bangla</option>
                    </select>
                    <Link to="">Faqs</Link>
                    <div className="flex">
                        <Link to="">About Us</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SubHeader;