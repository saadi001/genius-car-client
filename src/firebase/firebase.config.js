// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIoABs2vwreB1enEsr8tzR0IefUhb3QqM",
  authDomain: "genius-car-25cbf.firebaseapp.com",
  projectId: "genius-car-25cbf",
  storageBucket: "genius-car-25cbf.appspot.com",
  messagingSenderId: "91409811245",
  appId: "1:91409811245:web:256bf083a2ca120a9f75a4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;