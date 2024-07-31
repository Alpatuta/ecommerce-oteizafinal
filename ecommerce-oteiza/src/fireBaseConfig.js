import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOM,
  projectId: import.meta.env.VITE_PROJID,
  storageBucket: import.meta.env.VITE_STORAGEBUCK,
  messagingSenderId: import.meta.env.VITE_SENDERID,
  appId: import.meta.env.VITE_APPID,
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
