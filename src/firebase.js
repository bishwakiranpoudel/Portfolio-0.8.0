// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCoyQ12NJ4BCrEpyFkTY4paSyfrdrkFds",
  authDomain: "portfolio-552c6.firebaseapp.com",
  projectId: "portfolio-552c6",
  storageBucket: "portfolio-552c6.appspot.com",
  messagingSenderId: "1052556744431",
  appId: "1:1052556744431:web:631fc6317254e2e48d6d1a",
  measurementId: "G-0YDGK86BNC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const firestore = getFirestore(app);
