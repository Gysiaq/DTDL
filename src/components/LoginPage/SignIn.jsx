import React from "react";
import "./SignIn.css";
import LoginForm from "./LoginForm";
import { Link } from "react-router-dom";

function SignIn() {
    return (
        <div className="signin-container">
            <div className="signin-left">
                <img
                    src="src\images\LOGO_XXL.png"
                    className="sign-in-image-logo"
                />
                <img
                    src="src\images\Creative thinking-pana.png"
                    className="sign-in-image"
                />
                <h3 className="heading-4 motiv-text">
                    Be more productive and organized!
                </h3>
            </div>
            <div className="waves-singin">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 200 100vh"
                    width="200"
                    height="100vh"
                    fill="none"
                >
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M144.317 0L138.304 45C132.291 90 120.264 180 126.277 270C132.291 360 156.343 450 174.383 540C192.423 630 204.449 720 198.436 810C192.423 900 168.37 990 156.343 1035L144.317 1080H0V1035C0 990 0 900 0 810C0 720 0 630 0 540C0 450 0 360 0 270C0 180 0 90 0 45V0L144.317 0Z"
                        fill="#025464"
                    />
                </svg>
            </div>

            <div className="signin-right">
                <div className="login-text">
                    <div>
                        <div className="heading-2 login-text-h2">Login</div>
                    </div>
                </div>
                {/* <img src="src\images\Ellipse310.png" className="elipse310" /> */}
                {/* <img src="src\images\Ellipse150.png" className="elipse150-1" /> */}
                <LoginForm />
                <div>
                    <p className="paragraph sing-in-question">
                        You doesn't have account yet?
                    </p>

                    <Link className="paragraph sing-up-button" to="/signup">
                        SIGN UP
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default SignIn;
