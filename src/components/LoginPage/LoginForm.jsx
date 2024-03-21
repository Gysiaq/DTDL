import React, { useState } from "react";
import "./LoginForm.css";
import { useForm } from "react-hook-form";
import GoogleButton from "react-google-button";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../../context/UserAuthContext";

function LoginForm() {
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors },
    } = useForm({
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [error, setError] = useState("");
    const { logIn, googleSignIn } = useUserAuth();
    const navigate = useNavigate();

    const handleSubmitSignIn = async (e) => {
        e.preventDefault();
        setError("");
        try {
            await logIn(email, password);
            navigate("/home");
        } catch (err) {
            setError(err.message);
        }
    };

    const handleGoogleSignIn = async (e) => {
        e.preventDefault();
        setError("");
        try {
            await googleSignIn(email, password);
            navigate("/home");
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <form
            onSubmit={handleSubmit(handleSubmitSignIn)}
            className="loginform-container"
        >
            {/* {error && alert({ error })} */}
            <div>
                <p className="paragraph paragraph-email">
                    {<i className="bi bi-person"></i>} E-mail *
                </p>
                <input
                    {...register("email", {
                        required: { value: true, message: "This is required!" },
                        pattern: {
                            value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                            message: "Incorrect email",
                        },
                    })}
                    placeholder={"Enter your email"}
                    className="input-email-login paragraph"
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                />
                <p className="paragraph error-message-email">
                    {errors.email?.message}
                </p>
            </div>

            <div>
                <p className="paragraph paragraph-password">
                    {<i class="bi bi-lock"></i>} Password *
                </p>
                <input
                    {...register("password", {
                        required: { value: true, message: "This is required!" },
                        minLength: { value: 8, message: "Min length is 8" },
                    })}
                    placeholder="Enter your password"
                    className="input-password-login paragraph"
                    type="password"
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                />
                <p className="paragraph error-message-password">
                    {errors.password?.message}
                </p>
            </div>

            {/* <div className="buttom-forgot-password-container">
                <button
                    type="button"
                    className="paragraph button-forgot-password"
                >
                    Forgot password?
                </button>
            </div> */}

            <input
                type="submit"
                value="Sign In"
                className="input-submit-login heading-6"
            />

            <h3 className="paragraph or-sign-in-with">Or</h3>

            <GoogleButton
                onClick={handleGoogleSignIn}
                type="button"
                className="input-login-with-google heading-6"
            ></GoogleButton>
        </form>
    );
}

export default LoginForm;
