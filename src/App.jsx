import React from "react";
import "./App.css";
import SignIn from "./components/LoginPage/SignIn";
import { Route, Routes } from "react-router-dom";
import SignUp from "./components/LoginPage/SignUp";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./components/ToDoListSection/Home.jsx";

function App() {
    return (
        <div>
            <UserAuthContextProvider>
                <Routes>
                    <Route
                        path="/home"
                        element={
                            <ProtectedRoute>
                                <Home />
                            </ProtectedRoute>
                        }
                    />
                    <Route path="/" element={<SignIn />} />
                    <Route path="/signup" element={<SignUp />} />
                </Routes>
            </UserAuthContextProvider>
        </div>
    );
}

export default App;
