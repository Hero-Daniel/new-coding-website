// 1. Imports from the Firebase CDN
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { 
  getAuth, 
  signOut,
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword,
  onAuthStateChanged 
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// 2. Your specific project configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3HcFDkdEGYadFpuL3kPaXubXwuQ7nz50",
  authDomain: "coding-bootcamp-web.firebaseapp.com",
  projectId: "coding-bootcamp-web",
  storageBucket: "coding-bootcamp-web.firebasestorage.app",
  messagingSenderId: "1013646520813",
  appId: "1:1013646520813:web:743e3ca4aa4ec19e3af7e4"
};

// 3. Initialize the App and Auth
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// 4. Export the tools so other files can use them
export { 
  auth, 
  signOut, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  onAuthStateChanged 
};