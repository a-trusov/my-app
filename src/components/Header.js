import React from "react";
import logo from "../puma.png";
import style from './Header.module.css';

const Header = () => {
    return (
        <header className={style.header}>
            <img src={logo} className="App-logo" alt="logo" />
        </header>
    );
}

export default Header;