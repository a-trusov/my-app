import React from "react";
import logo from "../puma.png";

const Header = () => {
    return (
        <header className='header'>
            <img src={logo} className="App-logo" alt="logo" />
        </header>
    );
}

export default Header;