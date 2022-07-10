import React from "react";
const Title = (props) => {
    const { btn, subtitle, title } = props;
    return (
        <div className="mb-8 flex items-center justify-between">
            <div>
                <h3 className="font-medium text-xl">{title}</h3>
                <p>{subtitle}</p>
            </div>
            <button className="border px-6 py-1 text-lg">{btn}</button>
        </div>
    )
}
export default Title;