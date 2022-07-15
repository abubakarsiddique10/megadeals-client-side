import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/products/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    const { image, productName, stock, price, ratings, percantage, discountPrice, subImg } = product;
    const [displayImg, setDisplayImg] = useState("");

    const handleImage = (id) => {
        const findImg = subImg.find(img => img.id == id);
        setDisplayImg(findImg.img1)
    }

    const quantityRef = useRef()
    const handleAddToCart = () => {
        let quantity = quantityRef.current.value;
        if (quantity) {
            const product = {
                image: image,
                price: price,
                productName: productName,
                quantity: quantity,
            }

            fetch(`http://localhost:5000/cart`, {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify({ product })
            })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged) {
                        alert('Added Your Product In Cart');
                    }
                })
        }

    }

    return (

        <div className="container">
            <div className="flex gap-8">
                <div className="img-display border w-[500px] p-4">
                    <img src={displayImg ? displayImg : image} className="mx-auto py-4" />
                    <div className="grid grid-cols-4 gap-2">
                        {
                            subImg?.map(image => <img src={image.img1} className="sub-img" onClick={() => handleImage(image.id)} />)
                        }
                    </div>
                </div>
                <div className="product-info border w-[780px] p-8">
                    <h3 className="text-[#2d3054] text-3xl font-medium mb-4">{productName}</h3>
                    <div className="flex gap-1 items-center">
                        {
                            ratings?.map(rating => <img src={rating.img1} className="h-4" />)
                        }
                        <p className="ml-3">Add Your Review</p>
                    </div>
                    <div className="flex gap-2 bg-[#F4ECE2] p-2 my-3">
                        <h5><span className="font-bold text-[#F94073] text-xl">{discountPrice}</span></h5>
                        <h5><del className="font-medium text-[#12111163] text-xl">{price}</del></h5>
                    </div>
                    <div className="">
                        <h5 className="text-[#2BBEF9] font-bold">{stock}</h5>
                        <p>Replace your boring monochromatic tail lights with these bolt-on custom tail lights to give your vehicle an exclusive look like nothing else on the road. They stand out for their one-of-a-kind design with extra bright lights that will</p>
                    </div>
                    <div className="mt-4 flex items-center gap-4">
                        <div>
                            <label className="font-medium text-lg">Quantity</label>
                            <input type="text" class="border ml-2 w-14 h-10 rounded-lg text-center" placeholder="qnt" ref={quantityRef} required />
                        </div>
                        <button onClick={handleAddToCart} className="bg-[#2d3054] text-white py-2.5 px-8  font-medium rounded-full">Add to Cart</button>
                        <button className="bg-[#F94073] text-white py-2.5 px-8 rounded-full font-medium">Buy Now</button>
                    </div>

                    <div className="flex items-center gap-4 mt-5">
                        <h5 className="font-medium">Share on</h5>
                        <div className="flex gap-2">
                            <a href="#"><img src="https://i.ibb.co/2MRX7JD/facebook-2.png" /></a>
                            <a href="#"> <img src=" https://i.ibb.co/R0KtH0x/pinterest.png" /></a>
                            <a href="#"><img src="https://i.ibb.co/8rCcyMf/linkedin-1.png" /></a >
                            <a href="#"><img src="https://i.ibb.co/Gt0xxDM/skype.png" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default ProductDetails;