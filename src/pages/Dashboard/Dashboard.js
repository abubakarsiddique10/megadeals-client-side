import React from "react";
import { Link, Outlet } from "react-router-dom";
const Dashboard = () => {
    return (
        <div className="container">
            <h1>Dashboard</h1>
            <div class="drawer drawer-mobile z-[-1]">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content flex flex-col items-center justify-center">
                    <Outlet />
                    <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div class="drawer-side">
                    <label for="my-drawer-2" class="drawer-overlay"></label>
                    <ul class="menu overflow-y-auto w-60 bg-base-100 text-base-content">
                        <li><Link to="/dashboard">Order List</Link></li>
                        <li><Link to="review">Review</Link></li>
                    </ul>

                </div>
            </div>
        </div >
    )
}
export default Dashboard;