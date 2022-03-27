// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmR-WpAcaesgrBdqr15lOjioUMVwZ4toQ",
  authDomain: "test-ad72c.firebaseapp.com",
  projectId: "test-ad72c",
  storageBucket: "test-ad72c.appspot.com",
  messagingSenderId: "899790319930",
  appId: "1:899790319930:web:82a44a95f4b9e93604e003",
  measurementId: "G-WKE8V1CD19"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);

export default db;