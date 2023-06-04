// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCrwMppaOfBLmD22LOiGqxafbo0nRO08RE",
  authDomain: "hanoicoverteachers.firebaseapp.com",
  projectId: "hanoicoverteachers",
  storageBucket: "hanoicoverteachers.appspot.com",
  messagingSenderId: "548002816825",
  appId: "1:548002816825:web:8aa09be9f720689634fee8",
  measurementId: "G-M0E5YYVG3P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);






export const db = getFirestore(app)