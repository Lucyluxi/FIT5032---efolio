import 'bootstrap/dist/css/bootstrap.min.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import store from './store'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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

const app = createApp(App)
app.use(PrimeVue, { theme: { preset: Aura } })

app.use(store)
app.use(router)

app.mount('#app')