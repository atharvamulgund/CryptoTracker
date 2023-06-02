// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "cryptootracker.firebaseapp.com",
  projectId: "cryptootracker",
  storageBucket: "cryptootracker.appspot.com",
  messagingSenderId: "623775731960",
  appId: "1:623775731960:web:b2c5cd1faff8661437ab0d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
