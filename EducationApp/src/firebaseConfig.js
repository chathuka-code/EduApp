// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsQcFwJY2zQuySskDYBMu4kNrUjhO9cyc",
  authDomain: "eduapp-9c74b.firebaseapp.com",
  projectId: "eduapp-9c74b",
  storageBucket: "eduapp-9c74b.firebasestorage.app",
  messagingSenderId: "883185969874",
  appId: "1:883185969874:web:50f98cf009531209e99b0b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);