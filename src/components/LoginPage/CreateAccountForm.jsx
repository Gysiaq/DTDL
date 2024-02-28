import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useUserAuth } from "../../context/UserAuthContext";
import { Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./CreateAccountForm.css";
import { updateProfile } from "firebase/auth";
import Header from "../MainSection/Header";

function CreateAccountForm() {
    const {
        register,
        handleSubmit,
        watch,
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

    const handleSubmitsignUp = async (formValues) => {
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
            onSubmit={handleSubmit(handleSubmitsignUp)}
            className="form-signup-container"
        >
            {error && <Alert variant="danger">{error}</Alert>}

            <input
                {...register("name", {
                    required: { value: true, message: "This is required!" },
                })}
                placeholder="First Name"
                className="name-imput"
            />

            <input
                {...register("email", {
                    required: { value: true, message: "This is required!" },
                    // pattern: {
                    //     value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                    //     message: "Incorrect email",
                    // },
                })}
                placeholder="Email"
                className="email-input-create-account"
            />

            <input
                {...register("password", {
                    required: { value: true, message: "This is required!" },
                    minLength: { value: 8, message: "Min length is 8" },
                })}
                placeholder="Password"
                type="password"
                className="password-input-create-account"
            />

            <input
                type="submit"
                value="Sign Up"
                className="input-submit-signup heading-6"
            />
        </form>
    );
}
export default CreateAccountForm;
