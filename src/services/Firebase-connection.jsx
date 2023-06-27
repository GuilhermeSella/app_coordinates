import {initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'


const firebaseConfig = {
    apiKey: "AIzaSyDjp2naVdYBa2RhxnnLuiDBo3Y1kJvg3Ro",
    authDomain: "coordinates-10459.firebaseapp.com",
    projectId: "coordinates-10459",
    storageBucket: "coordinates-10459.appspot.com",
    messagingSenderId: "17389845792",
    appId: "1:17389845792:web:324711e8abcbb7c6aeeb45",
    measurementId: "G-C4T1LXJLHM"
  };

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);


export {auth, db, storage};