import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyDsvdD2WZeQALeOKFdYK7i3kjNl1hHCl3w",
    authDomain: "yasin-portfolio-4f8a7.firebaseapp.com",
    projectId: "yasin-portfolio-4f8a7",
    storageBucket: "yasin-portfolio-4f8a7.appspot.com",
    messagingSenderId: "133897735599",
    appId: "1:133897735599:web:3597c83bae404680bbb35a"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);