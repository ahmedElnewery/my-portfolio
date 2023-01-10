import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD2WD077PQ0YhlhmX_xsLGA-ZyzWmP6Xek",
  authDomain: "my-portfolio-b2266.firebaseapp.com",
  projectId: "my-portfolio-b2266",
  storageBucket: "my-portfolio-b2266.appspot.com",
  messagingSenderId: "813301442811",
  appId: "1:813301442811:web:07f338b632c33c24c0685e",
  measurementId: "G-B7JG166G7Q"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)