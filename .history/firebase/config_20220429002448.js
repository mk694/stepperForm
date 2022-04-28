// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "fb-form-b0388.firebaseapp.com",
  projectId: "fb-form-b0388",
  storageBucket: "fb-form-b0388.appspot.com",
  messagingSenderId: "356447492272",
  appId: "1:356447492272:web:b3df8683eefbe6cf7fc375",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
