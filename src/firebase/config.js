import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyB36WdwVQTPgLkzuhsonHm7Xv5ETYFInT0",
    authDomain: "mn-ck-ua.firebaseapp.com",
    projectId: "mn-ck-ua",
    storageBucket: "mn-ck-ua.firebasestorage.app",
    messagingSenderId: "1078530309925",
    appId: "1:1078530309925:web:19ddc87f11ecc7411be4cc"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage }; 