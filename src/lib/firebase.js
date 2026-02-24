import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD3p8jWuBs54B5ftBYQjdAjecGrwt5kyYM",
  authDomain: "project-manager-lite.firebaseapp.com",
  projectId: "project-manager-lite",
  storageBucket: "project-manager-lite.firebasestorage.app",
  messagingSenderId: "263893887974",
  appId: "1:263893887974:web:800ba6c80d0dc0a3120427",
  measurementId: "G-2H0X4M4TTL",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
