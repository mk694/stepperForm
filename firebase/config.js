// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBTd0wtbpK7bqQlZvfcNYDXkXnj064AkU",
  authDomain: "trial-moin.firebaseapp.com",
  projectId: "trial-moin",
  storageBucket: "trial-moin.appspot.com",
  messagingSenderId: "1024681582314",
  appId: "1:1024681582314:web:631bafcc36719c1f814193",
  measurementId: "G-E84LJQ61YQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
