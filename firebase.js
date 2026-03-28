import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD3HcFDkdEGYadFpuL3kPaXubXwuQ7nz50",
  authDomain: "coding-bootcamp-web.firebaseapp.com",
  projectId: "coding-bootcamp-web",
  storageBucket: "coding-bootcamp-web.firebasestorage.app",
  messagingSenderId: "1013646520813",
  appId: "1:1013646520813:web:743e3ca4aa4ec19e3af7e4"
};

const app = initializeApp(firebaseConfig);

// 🔑 Initialize authentication
export const auth = getAuth(app);