import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAMwxCFw0K9jNzO-7xG9e8-Xu8R-hFoo4M",
  authDomain: "ecommerce-oteiza.firebaseapp.com",
  projectId: "ecommerce-oteiza",
  storageBucket: "ecommerce-oteiza.appspot.com",
  messagingSenderId: "1082193848428",
  appId: "1:1082193848428:web:427c6d3965d9ba15e09049",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
