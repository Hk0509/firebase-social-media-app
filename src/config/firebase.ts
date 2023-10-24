// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuZ_6kVUXocJ-MZubbTOxPWpCY-bMP5QY",
  authDomain: "social-media-app-5fac8.firebaseapp.com",
  projectId: "social-media-app-5fac8",
  storageBucket: "social-media-app-5fac8.appspot.com",
  messagingSenderId: "523790533846",
  appId: "1:523790533846:web:a35dddaec6c4bbc9dd3577"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);