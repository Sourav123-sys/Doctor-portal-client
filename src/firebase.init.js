// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAQPns90a0JWRBIch3XItY3dxrkx0voKMA",
    authDomain: "doctor-portal-1665d.firebaseapp.com",
    projectId: "doctor-portal-1665d",
    storageBucket: "doctor-portal-1665d.appspot.com",
    messagingSenderId: "521392289767",
    appId: "1:521392289767:web:00a523a4134b86453b2f42"
};
// apiKey: process.env.REACT_APP_apiKey,
// authDomain: process.env.REACT_APP_authDomain,
// projectId: process.env.REACT_APP_projectId,
// storageBucket: process.env.REACT_APP_storageBucket,
// messagingSenderId: process.env.REACT_APP_messagingSenderId,
// appId: process.env.REACT_APP_appId

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
 export default app;
 