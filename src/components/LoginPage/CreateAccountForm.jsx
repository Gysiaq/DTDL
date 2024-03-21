import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useUserAuth } from "../../context/UserAuthContext";
import { Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./CreateAccountForm.css";
import { updateProfile } from "firebase/auth";

function CreateAccountForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const [error, setError] = useState("");

    const { signUp } = useUserAuth();
    const navigate = useNavigate();

    const handleSubmitSignUp = async (formValues) => {
        setError("");
        try {
            signUp(formValues.email, formValues.password).then((userCred) => {
                const { user } = userCred;
                updateProfile(user, { displayName: formValues.name });
            });
            navigate("/");
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <form
            onSubmit={handleSubmit(handleSubmitSignUp)}
            className="form-signup-container"
        >
            <div>
                <p className="paragraph paragraph-email">
                    {<i className="bi bi-person"></i>} Name *
                </p>
                <input
                    {...register("name", {
                        required: { value: true, message: "This is required!" },
                    })}
                    placeholder="First Name"
                    className="name-imput"
                />
                <p className="paragraph error-message-email">
                    {errors.name?.message}
                </p>
            </div>

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
                    placeholder="Email"
                    className="email-input-create-account"
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
                    placeholder="Password"
                    type="password"
                    className="password-input-create-account"
                />
                <p className="paragraph error-message-email">
                    {errors.password?.message}
                </p>
            </div>

            <input
                type="submit"
                value="Sign Up"
                className="input-submit-signup heading-6"
            />
        </form>
    );
}
export default CreateAccountForm;
