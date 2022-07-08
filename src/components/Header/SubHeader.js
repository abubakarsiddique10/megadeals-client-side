import React from "react";
import styles from '../../assets/styles/SubHeader.module.css';
const SubHeader = () => {
    return (
        <div className="bg-[#272343] text-white py-3.5">
            <div className={`container flex justify-between`}>
                <div className="flex items-center">
                    <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.3334 1.5L5.00002 8.83333L1.66669 5.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <p className="ml-2">Free shipping on all orders over $50</p>
                </div>
                <div className="flex gap-6 items-center">
                    <select className="bg-inherit">
                        <option>Eng</option>
                        <option>Bangla</option>
                    </select>
                    <p>Faqs</p>
                    <div className="flex">
                        <svg width="2" height="5" viewBox="0 0 2 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1.33325V3.99992" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <span>Need Help</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SubHeader;