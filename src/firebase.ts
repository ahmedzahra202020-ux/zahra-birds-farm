import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCJjoD16B9W97cdyipClDCkHqb1HC95-G4",
  authDomain: "zahra-birds-farm-f2481.firebaseapp.com",
  projectId: "zahra-birds-farm-f2481",
  storageBucket: "zahra-birds-farm-f2481.firebasestorage.app",
  messagingSenderId: "814463652536",
  appId: "1:814463652536:web:649c8800d9a66076865a4d",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
