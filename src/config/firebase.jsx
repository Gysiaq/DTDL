import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
    apiKey: "AIzaSyC1FSJeY_wEi6i-RcHPRXrrlre3zdZWpNU",
    authDomain: "dtdl-17b6c.firebaseapp.com",
    projectId: "dtdl-17b6c",
    storageBucket: "dtdl-17b6c.appspot.com",
    messagingSenderId: "805559620348",
    appId: "1:805559620348:web:49ac58545c49c47ee67d79",
    measurementId: "G-QKH05Q1LZ7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);