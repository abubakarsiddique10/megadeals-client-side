import React, { useRef } from "react";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth"
import auth from "../../firebase.init";
import { Link } from "react-router-dom";
import { async } from "@firebase/util";
const SignIn = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const handleSubmit = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        signInWithEmailAndPassword(email, password);
        event.target.reset()
    }

    const [
        sendPasswordResetEmail, sending, error2
    ] = useSendPasswordResetEmail(auth);

    const emailRef = useRef();
    const handlePassword = () => {
        const email = emailRef.current.value;
        sendPasswordResetEmail(email)
    }



    return (
        <div id="sign-in" className="container flex justify-center items-center">
            <div className=" p-10 py-16 text-white rounded w-[500px] border">
                <h1 className="text-center text-3xl mb-8 text-black font-medium">Sign In</h1>
                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                    <input type="email" placeholder="Email" className="border text-black px-4 py-3 rounded w-full outline-none" name="email" ref={emailRef} />
                    <input type="password" placeholder="Password" className="border text-black px-4 py-3 rounded w-full outline-none" name="password" />
                    <span onClick={handlePassword} className="text-black text-left mb-6">Forget Password</span>

                    {error && <p className="text-red-500">{error.message}</p>}
                    <button className="bg-[#F94073] py-3 rounded-full w-full font-medium" type="submit">Sign In</button>
                </form>
                <div class="divider text-black">OR</div>



                <div>
                    <button onClick={() => signInWithGoogle()} className="bg-[#2D3054] py-3 rounded-full w-full font-medium">Sign In With Google</button>
                </div>
                <div className="text-black mt-4 text-center">
                    <h5 className="font-medium mb-2">New to Megadeals</h5>
                    <Link to="/signUp" className="border py-[1px] px-4">Create Your Megadeals Account</Link>
                </div>
            </div>
        </div>
    )
}
export default SignIn;