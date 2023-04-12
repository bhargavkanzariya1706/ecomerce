// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcXZ5vX0zVy_iTclFnzDu4VV_XOWwoyrQ",
  authDomain: "reactapp-7914c.firebaseapp.com",
  projectId: "reactapp-7914c",
  storageBucket: "reactapp-7914c.appspot.com",
  messagingSenderId: "910525877107",
  appId: "1:910525877107:web:3d5c1150979ae66d1d5306",
  measurementId: "G-PZ91TD60EV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export { app, auth };
