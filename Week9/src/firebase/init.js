// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIB5k87XfWdcUqESEGlrPcZxdx1_qpDi4",
  authDomain: "fit5032-efolio-25cb6.firebaseapp.com",
  projectId: "fit5032-efolio-25cb6",
  storageBucket: "fit5032-efolio-25cb6.appspot.com",
  messagingSenderId: "275972032319",
  appId: "1:275972032319:web:7e093aaf813a6659cf358a",
  measurementId: "G-M580266KQW"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore()

export default db;