import React from "react";
const Input = ({ type, placeholder }) => {
    return (
        <input type={type} placeholder={placeholder} className="border text-black px-4 py-3 rounded w-full outline-none" />
    )
}
export default Input;