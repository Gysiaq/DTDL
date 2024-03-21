import React, { useContext } from "react";
import "./Header.css";
import { UserAuthContext, useUserAuth } from "../../context/UserAuthContext";
import { useNavigate } from "react-router-dom";

function Header() {
    const { user } = useContext(UserAuthContext);
    const { logOut } = useUserAuth();
    const navigate = useNavigate();

    const handleLogOut = async () => {
        try {
            await logOut();
            navigate("/");
        } catch (err) {
            // console.log(err.message);
        }
    };
    return (
        <div className="header-main">
            <img
                src={require("../../images/LOGO.png")}
                className="header-image"
            />
            <div>
                <span className="header-user paragraph">
                    Hello, {user.displayName.split(" ")[0]}
                </span>
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
