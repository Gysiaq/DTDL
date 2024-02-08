import React from "react";
import { Link } from "react-router-dom";
import CreateAccountForm from "./CreateAccountForm";
import "./SignUp.css";

function SignUp() {
    return (
        <div className="signup-container">
            <div className="signup-left">
                <div className="signup-text">
                    <div className="signup-text-div">
                        <div className="heading-2 signup-text-h2">
                            Create Account
                        </div>
                    </div>
                </div>
                <div className="create-account-form-container">
                    <CreateAccountForm />
                </div>

                <div className="question-sign-up">
                    <p className="paragraph sing-up-question">
                        You have already account?
                    </p>

                    <Link className="paragraph sing-up-button" to="/">
                        SIGN IN
                    </Link>
                </div>
            </div>
            <div className="waves-singup">
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
            <div className="signup-right">
                <div>
                    <img
                        src="src\images\LOGO_XXL.png"
                        className="sign-up-image-logo"
                    />
                    <img
                        src="src\images\Mobile login-pana.png"
                        className="sign-up-image"
                    />
                    <h3 className="heading-4 motiv-text">
                        Join for new experience
                    </h3>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
