import React from "react";
const Info = ({ icon, title, details }) => {

    return (
        <div className="mt-5 flex gap-5 items-center">

            <img className="w-[24px]" src={icon} />

            <div>
                <h5>{title}</h5>
                <p>{details}</p>
            </div>
        </div>
    )
}
export default Info;