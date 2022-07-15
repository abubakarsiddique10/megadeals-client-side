import React from "react";
import { Outlet } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../firebase.init";
const Authentication = () => {
    const location = useLocation();
    const [user, loading] = useAuthState(auth);

    if (loading) {
        return <p>Loading...</p>
    }
    if (!user) {
        return <Navigate to="/signIn" state={{ from: location }} replace />
    }
    return <Outlet />
}
export default Authentication;