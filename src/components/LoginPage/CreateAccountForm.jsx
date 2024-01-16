import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useUserAuth } from "../../context/UserAuthContext";
import { Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";

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

    // const [name, setName] = useState("");
    // const [surname, setSurname] = useState("");
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
        <form onSubmit={handleSubmitsignUp}>
            {error && <Alert variant="danger">{error}</Alert>}
            {/* <input
                {...register("name", {
                    required: { value: true, message: "This is required!" },
                })}
                placeholder="name..."
                onChange={(e) => {
                    setName(e.target.value);
                }}
            />

            <input
                {...register("surname", {
                    required: { value: true, message: "This is required!" },
                })}
                placeholder="surname..."
                onChange={(e) => {
                    setSurname(e.target.value);
                }}
            /> */}

            <input
                {...register("email", {
                    required: { value: true, message: "This is required!" },
                    // pattern: {
                    //     value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                    //     message: "Incorrect email",
                    // },
                })}
                placeholder="email"
                onChange={(e) => {
                    setEmail(e.target.value);
                }}
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
            />

            <input type="submit" value="Sign UP" />
        </form>
    );
}
export default CreateAccountForm;
