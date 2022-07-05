import firebase from 'firebase/compat/app';
import { getFirestore } from "firebase/firestore"
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCjVFH1w8aLiVzhAwQ1OkdN376uGnACvuo",
    authDomain: "clone-1f570.firebaseapp.com",
    projectId: "clone-1f570",
    storageBucket: "clone-1f570.appspot.com",
    messagingSenderId: "381921519775",
    appId: "1:381921519775:web:e917adf888acee4c889aaa"
  };

  const firebaseApp = initializeApp(firebaseConfig);
  const db = getFirestore(firebaseApp);
  const auth = getAuth(firebaseApp) 
  const provider = new GoogleAuthProvider();
  
  export { db, auth, provider};