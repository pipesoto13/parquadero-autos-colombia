// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB8RPVaScBW8yN4PCj3mv_pqeAaEaco6Io',
  authDomain: 'parqueadero-autos-colombia.firebaseapp.com',
  projectId: 'parqueadero-autos-colombia',
  storageBucket: 'parqueadero-autos-colombia.appspot.com',
  messagingSenderId: '576291607402',
  appId: '1:576291607402:web:d40cf75d6d5cfcf09f8b13',
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();
