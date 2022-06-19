import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyA8c3U0bbObZMucWbWH4t9tSDzzp-lY6rk",
  authDomain: "readinglistapp-b3269.firebaseapp.com",
  projectId: "readinglistapp-b3269",
  storageBucket: "readinglistapp-b3269.appspot.com",
  messagingSenderId: "763425723886",
  appId: "1:763425723886:web:d3ce9b54c927a03b63eaff"
};

// init firebase
initializeApp(firebaseConfig)

// init firestore
const db = getFirestore()

export { db }
