import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBewqfEnKvN-ESD3EY--lTdGX01V2YF78Q",
  authDomain: "wanlainjo-c7fbd.firebaseapp.com",
  projectId: "wanlainjo-c7fbd",
  storageBucket: "wanlainjo-c7fbd.appspot.com",
  messagingSenderId: "44611690944",
  appId: "1:44611690944:web:4c32754e97f78a6321e825",
  measurementId: "G-LFXYLYGS5Z"
};

const app = initializeApp(firebaseConfig)
const auth = getAuth()
const db = getFirestore()

export { auth, db }