// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYeXjPzUGeecsJ_7g9p8RjbWBxvp4UfKQ",
  authDomain: "d1-web-store.firebaseapp.com",
  projectId: "d1-web-store",
  storageBucket: "d1-web-store.appspot.com",
  messagingSenderId: "441951291454",
  appId: "1:441951291454:web:524c789ab93124ec3d296f",
  measurementId: "G-09SYDCCHX8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);