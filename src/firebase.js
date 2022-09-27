// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCh3sWpdbTpfPNFf6Ut_RbJdMHqbpKRZdk",
  authDomain: "chat-app-yt-145c9.firebaseapp.com",
  projectId: "chat-app-yt-145c9",
  storageBucket: "chat-app-yt-145c9.appspot.com",
  messagingSenderId: "421732205748",
  appId: "1:421732205748:web:bf4545692a4ca908ff83e1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)

 export const db = getFirestore(app)