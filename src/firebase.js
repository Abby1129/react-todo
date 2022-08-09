// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxfG4NZKLDqDheS-Ah7NHm_DmV-gmct4k",
  authDomain: "todo-app-7b4c1.firebaseapp.com",
  projectId: "todo-app-7b4c1",
  storageBucket: "todo-app-7b4c1.appspot.com",
  messagingSenderId: "831461266711",
  appId: "1:831461266711:web:deb583a6b9d29091e79352",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
