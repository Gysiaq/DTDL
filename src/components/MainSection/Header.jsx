import React from "react";
import "./Header.css";

function Header({ name }) {
    return (
        <div className="header-main">
            <img src="src\images\LOGO.png" className="header-image" />
            <div>
                <span className="header-user paragraph">Hello, {name}</span>
                <button className="header-button heading-6">Sign Out</button>
            </div>
        </div>
    );
}

export default Header;
