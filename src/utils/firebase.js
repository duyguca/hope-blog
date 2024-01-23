// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "hope-blog-411621.firebaseapp.com",
  projectId: "hope-blog-411621",
  storageBucket: "hope-blog-411621.appspot.com",
  messagingSenderId: "672512916263",
  appId: "1:672512916263:web:c34adf1fdec1c8455d8702",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
