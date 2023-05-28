// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwJwgvNtFTnb0sacNdl74RGV8No_OdWBo",
  authDomain: "react-todo-app-4b833.firebaseapp.com",
  projectId: "react-todo-app-4b833",
  storageBucket: "react-todo-app-4b833.appspot.com",
  messagingSenderId: "84522891657",
  appId: "1:84522891657:web:b31d7779e77fefdffe0958"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);