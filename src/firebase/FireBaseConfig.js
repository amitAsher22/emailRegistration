// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC8hqj3kz7F0G0Sq34cGKouWGcgHvVit60",
  authDomain: "emailpasswordlogin-eaaaf.firebaseapp.com",
  projectId: "emailpasswordlogin-eaaaf",
  storageBucket: "emailpasswordlogin-eaaaf.appspot.com",
  messagingSenderId: "177985730902",
  appId: "1:177985730902:web:e1a09f31fae0fedbe7fef7",
  measurementId: "G-W7RV8CFKRJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const database = getAuth(app);
