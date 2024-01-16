import React, { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup,
} from "firebase/auth";

import { auth } from "../components/LoginPage/firebase";

const UserAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
    const [user, setUser] = useState("");
    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const logIn = (email, password) => {
        console.log("Email", email);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const logOut = () => {
        signOut(auth);
    };

    const googleSignIn = () => {
        const googleAuthProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleAuthProvider);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log("Auth", currentUser);
            setUser(currentUser);
        });
        return () => {
            unsubscribe();
        };
    }, []);
    return (
        <UserAuthContext.Provider
            value={{ user, signUp, logIn, logOut, googleSignIn }}
        >
            {children}
        </UserAuthContext.Provider>
    );
}

export function useUserAuth() {
    return useContext(UserAuthContext);
}
