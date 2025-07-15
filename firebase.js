import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB_R11j4dZC7-rdxcTngN6srJ3j_iBvgwk",
  authDomain: "examen2-65e97.firebaseapp.com",
  projectId: "examen2-65e97",
  storageBucket: "examen2-65e97.appspot.com", 
  messagingSenderId: "46174535545",
  appId: "1:46174535545:web:31b3794a53ae33d821b9a8",
  measurementId: "G-HQJEJ4CPHG"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
