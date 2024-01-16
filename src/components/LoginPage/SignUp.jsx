import React from "react";
import { Link } from "react-router-dom";
import CreateAccountForm from "./CreateAccountForm";

function SignUp() {
    return (
        <div className="signin-container">
            <div>
                <div className="login-text">
                    <div>
                        <div className="heading-2 login-text-h2">
                            Create Account
                        </div>
                    </div>
                </div>
                <CreateAccountForm />
                <div>
                    <p className="paragraph sing-in-question">
                        You have already account?
                    </p>

                    <Link className="paragraph sing-up-button" to="/">
                        SIGN IN
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
