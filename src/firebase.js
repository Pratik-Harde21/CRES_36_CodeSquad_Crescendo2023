import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD35p078WeHacx-lUO4IKqicBIuS-QaTmY",
  authDomain: "hack-edu.firebaseapp.com",
  projectId: "hack-edu",
  storageBucket: "hack-edu.appspot.com",
  messagingSenderId: "1005698850666",
  appId: "1:1005698850666:web:31ae6e4f883a9f67704f13"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };