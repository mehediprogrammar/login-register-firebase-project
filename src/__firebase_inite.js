// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDaNNcDRJX7rAXtm3Y15C9iUP4n2a8r0Kc",
  authDomain: "register-login-firebase-e4eec.firebaseapp.com",
  projectId: "register-login-firebase-e4eec",
  storageBucket: "register-login-firebase-e4eec.appspot.com",
  messagingSenderId: "673887459762",
  appId: "1:673887459762:web:4771b0b472df2be394acab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default (app)