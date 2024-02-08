import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useUserAuth } from "../../context/UserAuthContext";
import { Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./CreateAccountForm.css";

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

    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const { signUp } = useUserAuth();
    const navigate = useNavigate();

    const handleSubmitsignUp = async (e) => {
        e.preventDefault();
        setError("");
        try {
            await signUp(email, password);
            navigate("/");
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <form onSubmit={handleSubmitsignUp} className="form-signup-container">
            {error && <Alert variant="danger">{error}</Alert>}
            <div className="name-surename-components">
                <input
                    {...register("name", {
                        required: { value: true, message: "This is required!" },
                    })}
                    placeholder="Name"
                    onChange={(e) => {
                        setName(e.target.value);
                    }}
                    className="name-imput"
                />

                <input
                    {...register("surname", {
                        required: { value: true, message: "This is required!" },
                    })}
                    placeholder="Surname"
                    onChange={(e) => {
                        setSurname(e.target.value);
                    }}
                    className="surename-input"
                />
            </div>

            <input
                {...register("email", {
                    required: { value: true, message: "This is required!" },
                    // pattern: {
                    //     value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                    //     message: "Incorrect email",
                    // },
                })}
                placeholder="Email"
                onChange={(e) => {
                    setEmail(e.target.value);
                }}
                className="email-input-create-account"
            />

            <input
                {...register("password", {
                    required: { value: true, message: "This is required!" },
                    minLength: { value: 8, message: "Min length is 8" },
                })}
                placeholder="Password"
                type="password"
                onChange={(e) => {
                    setPassword(e.target.value);
                }}
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
