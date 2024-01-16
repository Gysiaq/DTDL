import React from "react";
import "./Header.css";
import { useUserAuth } from "../../context/UserAuthContext";
import { useNavigate } from "react-router-dom";

function Header({ name }) {
    const { logOut } = useUserAuth();
    const navigate = useNavigate();

    const handleLogOut = async () => {
        try {
            await logOut();
            navigate("/");
        } catch (err) {
            console.log(err.message);
        }
    };
    return (
        <div className="header-main">
            <img src="src\images\LOGO.png" className="header-image" />
            <div>
                <span className="header-user paragraph">Hello, {name}</span>
                <button
                    onClick={handleLogOut}
                    className="header-button heading-6"
                >
                    Sign Out
                </button>
            </div>
        </div>
    );
}

export default Header;
