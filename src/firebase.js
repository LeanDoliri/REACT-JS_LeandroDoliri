import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCUXzRdRc3qWez7ETySkaSO7tNoY9jXBHc",
  authDomain: "al-toque-leandrodoliri.firebaseapp.com",
  projectId: "al-toque-leandrodoliri",
  storageBucket: "al-toque-leandrodoliri.appspot.com",
  messagingSenderId: "766564398208",
  appId: "1:766564398208:web:2458fde8cbf0a446b32265"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);