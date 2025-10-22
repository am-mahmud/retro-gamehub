
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD6yU06UaXJa9t1iQXG3SUBS3AO4nUQSDk",
  authDomain: "email-password-auth-a7c8d.firebaseapp.com",
  projectId: "email-password-auth-a7c8d",
  storageBucket: "email-password-auth-a7c8d.firebasestorage.app",
  messagingSenderId: "546429920569",
  appId: "1:546429920569:web:17e3284dbf10f6b6b5b4e8"
};


const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);

