// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyByK7NdYQaCpKmQWk5tTNJETnt8rNEcVUE',
  authDomain: 'house-marketplace-app-daniel.firebaseapp.com',
  projectId: 'house-marketplace-app-daniel',
  storageBucket: 'house-marketplace-app-daniel.appspot.com',
  messagingSenderId: '1064471626071',
  appId: '1:1064471626071:web:aacf1251fa3972a5033e12',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
