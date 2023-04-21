import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBoR8AQHoyuA-8r2ZgAkEVHwmKE4ndc77c",
  authDomain: "backendgamerzone.firebaseapp.com",
  projectId: "backendgamerzone",
  storageBucket: "backendgamerzone.appspot.com",
  messagingSenderId: "561281218866",
  appId: "1:561281218866:web:990abf6afcb12c1c0b7f2b"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)