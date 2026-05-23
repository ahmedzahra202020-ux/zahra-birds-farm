import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCInodIQto8JteU2PzOr1YYmE_3wEDbxw4",

  authDomain: "zahra-birds-farm.firebaseapp.com",

  projectId: "zahra-birds-farm",

  storageBucket: "zahra-birds-farm.firebasestorage.app",

  messagingSenderId: "849195604605",

  appId: "1:849195604605:web:b0a7267ee96409ef672f14",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);
