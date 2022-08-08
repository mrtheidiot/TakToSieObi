import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Initialize Firebase
const app = initializeApp({
  apiKey: "AIzaSyCh-7cCquXq9WYQSVoszFoJEyM9Go7wc3s",
  authDomain: "taktosieobi-94781.firebaseapp.com",
  databaseURL:
    "https://taktosieobi-94781-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "taktosieobi-94781",
  storageBucket: "taktosieobi-94781.appspot.com",
  messagingSenderId: "615095860149",
  appId: "1:615095860149:web:046192ba1c1c5087c7f7fc",
});

// Firebase storage reference
const storage = getStorage(app);
export default storage;
