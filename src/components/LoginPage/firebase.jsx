import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { FIREBASE_KEYS } from "../../APIKey";

const app = firebase.initializeApp({
    apiKey: FIREBASE_KEYS.REACT_APP_API_KEY,
    authDomain: FIREBASE_KEYS.REACT_APP_AUTH_DOMAIN,
    projectId: FIREBASE_KEYS.REACT_APP_PROJECT_ID,
    storageBucket: FIREBASE_KEYS.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: FIREBASE_KEYS.REACT_APP_MESSAGING_SENDER_ID,
    appId: FIREBASE_KEYS.REACT_APP_ID,
    measurementId: FIREBASE_KEYS.REACT_APP_MEASUREMENT_ID,
});

export const auth = firebase.auth();
export default app;
