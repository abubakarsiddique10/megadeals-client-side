import React from "react";
import MainHeader from "./MainHeader";
import Navbar from "./Navbar";
import SubHeader from "./SubHeader";
const Header = () => {
    return (
        <header>
            <SubHeader />
            <MainHeader />
            <Navbar />
        </header>
    )
}
export default Header;