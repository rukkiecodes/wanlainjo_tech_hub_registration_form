import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyA5YfehLgjto-toU0rzTGfxYiggh-XILWI",
  authDomain: "akeres-blog.firebaseapp.com",
  projectId: "akeres-blog",
  storageBucket: "akeres-blog.appspot.com",
  messagingSenderId: "84772023110",
  appId: "1:84772023110:web:15116251f01308e20b5347",
  measurementId: "G-K27Q2D3E2J"
};

const app = initializeApp(firebaseConfig)
const auth = getAuth()
const db = getFirestore()

export { auth, db }