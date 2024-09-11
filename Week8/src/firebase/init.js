// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBS2kZ2Qjo84BSu33B5hzm3MM9E4PpCyY4",
  authDomain: "fit5032-efolio.firebaseapp.com",
  projectId: "fit5032-efolio",
  storageBucket: "fit5032-efolio.appspot.com",
  messagingSenderId: "1024497678285",
  appId: "1:1024497678285:web:06c427fde42452419b3684"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore()

export default db;