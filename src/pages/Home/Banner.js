import styled from "daisyui/dist/styled";
import React, { useState } from "react";
const Banner = () => {
    const images = ['https://i.ibb.co/sv5Wf8F/slider-image-5.jpg', 'https://i.ibb.co/52hBDP6/slider-image-3.jpg', 'https://i.ibb.co/Rg8Pb1H/slider-image-4.jpg'];

    const [count, setCount] = useState(0)
    const rightToLeft = (plus) => {
        if (count == 2560) {
            setCount(0)
        }
        else {
            setCount(count + plus)
        }
    }

    const leftToRight = (minuse) => {
        if (count < 1) {
            console.log(count)
            setCount(0)
        }
        else {
            setCount(count - minuse)
        }
    }

    return (
        <section id="banner">
            <div className={`max-w-[1280px] m-auto overflow-hidden relative`}>
                <div className={`w-[3840px] flex transition-all duration-500 ease-in`} style={{ marginLeft: `${-count}px` }}>
                    <div className="w-[1280px] relative">
                        <img src="https://i.ibb.co/52hBDP6/slider-image-3.jpg" className="w-full h-auto img1" />
                        <div className="banner-info">
                            <h3 class="text-5xl text-bold">A different kind <br />of grocery store</h3>
                            <p className="text-2xl mt-3">week. Don’t miss...</p>
                        </div>
                    </div>

                    <div className="w-[1280px] relative">
                        <img src="https://i.ibb.co/sv5Wf8F/slider-image-5.jpg" className="w-full" />
                        <div className="banner-info">
                            <h3 class="text-5xl text-bold">A different kind <br />of grocery store</h3>
                            <p className="text-2xl mt-3">week. Don’t mis</p>
                        </div>
                    </div>

                    <div className="w-[1280px] relative">
                        <img src="https://i.ibb.co/Rg8Pb1H/slider-image-4.jpg" className="w-full" />
                        <div className="banner-info">
                            <h3 class="text-5xl text-bold">A different kind <br />of grocery store</h3>
                            <p className="text-2xl mt-3">week. Don’t</p>
                        </div>
                    </div>
                </div>


                <div className="flex banner-btn gap-4">
                    <button onClick={() => rightToLeft(1280)}><img src="https://i.ibb.co/SrYKyJn/left-arrow.png" className="w-5" /></button>
                    <button onClick={() => leftToRight(1280)}><img src=" https://i.ibb.co/C6gbyZ4/next.png" className="w-5" /></button>
                </div>
            </div>
        </section >
    )
}
export default Banner;