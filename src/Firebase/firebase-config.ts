import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyAGKwPpaDVkSnJUwlonAM1mXpt2YCQ22Eo",
    authDomain: "nextauth-59635.firebaseapp.com",
    projectId: "nextauth-59635",
    storageBucket: "nextauth-59635.appspot.com",
    messagingSenderId: "12796546059",
    appId: "1:12796546059:web:19290a7a9d4bd18c010b0e",
    measurementId: "G-5M8XYT8YLX"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);