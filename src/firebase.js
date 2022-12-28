// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "chat-app-90944.firebaseapp.com",
  projectId: "chat-app-90944",
  storageBucket: "chat-app-90944.appspot.com",
  messagingSenderId: "189805812421",
  appId: "1:189805812421:web:2e5baa5997f6613876eeac",
  measurementId: "G-5E9KEYV18D"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();