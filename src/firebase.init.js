// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAutkuvd78sGiu_OgGyLSCbmC_mjwOoKRU",
  authDomain: "moha-melon.firebaseapp.com",
  projectId: "moha-melon",
  storageBucket: "moha-melon.firebasestorage.app",
  messagingSenderId: "168728752101",
  appId: "1:168728752101:web:0cfe34e2cb2f375c65890c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);