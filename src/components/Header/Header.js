import React from "react";
import MainHeader from "./MainHeader";
import Navbar from "./Navbar";
import SubHeader from "./SubHeader";
const Header = () => {
    return (
        <header className="sticky top-0 z-50">
            <SubHeader />
            <MainHeader />
            <Navbar />
        </header>
    )
}
export default Header;