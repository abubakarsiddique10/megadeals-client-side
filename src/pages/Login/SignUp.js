import React, { useState } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth"
import auth from "../../firebase.init";
import { Link } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

const SignUp = () => {
    const [signInError, setSignInError] = useState('');
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const handleSubmit = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const phone = event.target.phone.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        createUserWithEmailAndPassword(email, password);
        event.target.reset();
    }

    return (
        <div id="sign-in" className="container flex justify-center items-center">
            <div className=" p-10 text-white rounded w-[500px] border">
                <h1 className="text-center text-3xl mb-8 text-black font-medium">Create Accouont</h1>
                <form onSubmit={handleSubmit} className="flex flex-col gap-3">

                    <input type="text" placeholder="Name" className="border text-black px-4 py-3 rounded w-full outline-none" name="name" />
                    <input type="number" placeholder="Phone" className="border text-black px-4 py-3 rounded w-full outline-none" name="phone" />
                    <input type="email" placeholder="Email" className="border text-black px-4 py-3 rounded w-full outline-none" name="email" />
                    <input type="password" placeholder="Password" className="border text-black px-4 py-3 rounded w-full outline-none" name="password" />
                    {error ? <p className="text-red-500">{error.message}</p> : ""}

                    <button className="bg-[#F94073] py-3 rounded-full w-full font-medium mt-2" type="submit">Sign Up</button>
                </form>
                <div class="divider text-black">OR</div>
                <div>
                    <button onClick={() => signInWithGoogle()} className="bg-[#2D3054] py-3 rounded-full w-full font-medium">Sign In With Google</button>
                </div>
                <div className="text-black mt-4 text-center">
                    <h5 className="font-medium mb-2">Already have an account?</h5>
                    <Link to="/signIn" className="border py-[1px] px-4">Sign In</Link>
                </div>
            </div>
        </div>
    )
}
export default SignUp;