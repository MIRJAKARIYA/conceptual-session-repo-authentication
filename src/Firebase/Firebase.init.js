// Import the functions you need from the SDKs you need
import { initializeApp, } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1M9VrDaH2iIDkKU9CZ2xw6CCHDaOAqjs",
  authDomain: "email-password-auth-prac-e862a.firebaseapp.com",
  projectId: "email-password-auth-prac-e862a",
  storageBucket: "email-password-auth-prac-e862a.appspot.com",
  messagingSenderId: "12261307157",
  appId: "1:12261307157:web:d5bf7b6a85a2a183f0ef1c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)