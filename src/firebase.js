import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyD3S8Gc65sE6lTy4yMaUrE95ibr38fR4h4",
    authDomain: "ecommerce-coderhouse-30285.firebaseapp.com",
    databaseURL: "https://ecommerce-coderhouse-30285-default-rtdb.firebaseio.com",
    projectId: "ecommerce-coderhouse-30285",
    storageBucket: "ecommerce-coderhouse-30285.appspot.com",
    messagingSenderId: "100088591573",
    appId: "1:100088591573:web:4a0038f6d38c2f47c35e5c",
    measurementId: "G-G5TP4WCVYW"
  };

  const app = initializeApp(firebaseConfig)
const firestore = getFirestore(app)

export default firestore