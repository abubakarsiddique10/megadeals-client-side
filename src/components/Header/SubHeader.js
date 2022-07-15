import React from "react";
import styles from '../../assets/styles/SubHeader.module.css';
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";
const SubHeader = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth)
    }
    return (
        <div className="bg-[#272343] text-white py-2 text-sm">
            <div className={`container flex justify-between`}>
                <div className="flex items-center gap-x-5">
                    <div>
                        <Link to="">Help & Contact</Link>
                    </div>
                    <div>
                        <Link to="">Order Tracking</Link>
                    </div>
                </div>
                <div className="flex gap-6 items-center">
                    <select className="bg-inherit">
                        <option>Eng</option>
                        <option>Bangla</option>
                    </select>
                    <Link to="">Faqs</Link>
                    <div className="flex gap-6 items-center">
                        <Link to="">About Us</Link>
                        {user ? <button onClick={handleSignOut} className="border px-3 py-[2px]" >Sign Out</button>
                            : <Link to="/signIn" className="border px-3 py-[2px]" >Sign In</Link>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SubHeader;