// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "namsa-b79ff.firebaseapp.com",

  projectId: "namsa-b79ff",

  storageBucket: "namsa-b79ff.appspot.com",

  messagingSenderId: "744055254144",

  appId: "1:744055254144:web:b05d24c1be27847cb18a65",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
