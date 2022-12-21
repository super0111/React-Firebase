import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCOsL1578gF8sdsQc_CdfaRnjGB5nA5aL0",
  authDomain: "test-f554d.firebaseapp.com",
  projectId: "test-f554d",
  storageBucket: "test-f554d.appspot.com",
  messagingSenderId: "557987863109",
  appId: "1:557987863109:web:5fadaaa9239cf73c1e212c",
  measurementId: "G-0JVWFY72SN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {db}