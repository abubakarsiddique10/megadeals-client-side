import React from "react";
import Input from "../../components/Input";
import Info from "./Info";
const Contact = () => {
    const info = [
        {}
    ]
    return (


        <section className="">
            <h1 className="text-center my-8 text-4xl font-medium">Contact Us</h1>
            <div className="container">
                <div className="md:flex gap-8">
                    <div className="md:max-w-[500px] bg-[#F7F2EB] p-10 rounded mb-10 md:mb-0 w-full">
                        <h1 className="text-3xl font-medium ">Get In Touch</h1>
                        <p className="text-lg">Parking is only available on weekends. Feel free to buzz 101 at the intercom!</p>

                        <Info icon={"https://i.ibb.co/BHDcnXr/pin-1.png"} title={"Address"} details={"139 Brook Drive South Richmond Hill, New York 1067 USA"} />

                        <Info icon={" https://i.ibb.co/sCjDXkP/email-1.png"} title={"Phone"} details={"(+084) 859 481 3614"} />

                        <Info icon={"https://i.ibb.co/yhGfqxM/phone-call.png"} title={"Mail"} details={"bzopets@support.com bzopets@support.com"} />

                        <Info icon={"https://i.ibb.co/k2Q8VDk/clock.png"} title={"Openning Time"} details={"Monday to Saturday: 9:00 AM-18:00 PM Sunday: 10: 00 AM-17: 30 PM"} />
                    </div>

                    <div className=" bg-[#2D3054] p-10 text-white rounded w-full">
                        <h1 className="text-3xl font-medium">Have An Question? Contact Us!</h1>
                        <p className="text-lg">Your email address will not be published. Required fields are marked </p>
                        <form className="flex flex-col gap-4 mt-8 text-black">
                            <div className="flex gap-4">
                                <Input type={"text"} placeholder={"Name"} />
                                <Input type={"email"} placeholder={"Email"} />
                            </div>
                            <Input type={"number"} placeholder={"Number"} />
                            <textarea placeholder="Descrption..." className="border px-4 py-3 w-full rounded h-[150px] outline-none" ></textarea>
                            <button className="btn w-40 mt-2 bg-[#E83C6B]">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Contact;