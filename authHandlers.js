// File: src/services/authService.js (or src/auth/authService.js)

// Import the 'auth' object from your firebase.js file.
// Adjust the path '../../firebase/firebase' if your files are in different folders.
// For example, if both are in 'src', it might be './firebase'.
import { auth } from '../firebase.js'; // IMPORTANT: Adjust this path!

// Import necessary functions from Firebase Authentication SDK
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

/**
 * Signs up a new user with email and password.
 * @param {string} email The user's email.
 * @param {string} password The user's password.
 * @returns {Promise<Object | null>} A Promise that resolves with the user credential, or rejects with an error.
 */
export async function signUpUser(email, password) {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    // Signed up successfully
    const user = userCredential.user;
    console.log("User signed up:", user.email);
    return user;
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error("Error signing up:", errorCode, errorMessage);
    throw error; // Re-throw to be handled by the calling script
  }
}

/**
 * Signs in an existing user with email and password.
 * @param {string} email The user's email.
 * @param {string} password The user's password.
 * @returns {Promise<Object | null>} A Promise that resolves with the user credential, or rejects with an error.
 */
export async function signInUser(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    // Signed in successfully
    const user = userCredential.user;
    console.log("User signed in:", user.email);
    return user;
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error("Error signing in:", errorCode, errorMessage);
    throw error; // Re-throw to be handled by the calling script
  }
}

/**
 * Signs out the current user.
 * @returns {Promise<void>} A Promise that resolves when the user is signed out, or rejects with an error.
 */
export async function signOutUser() {
  try {
    await signOut(auth);
    console.log("User signed out.");
  } catch (error) {
    console.error("Error signing out:", error);
    throw error;
  }
}

/**
 * Observes changes in the user's sign-in state.
 * @param {(user: Object | null) => void} callback A function to call when the auth state changes.
 * @returns {() => void} An unsubscribe function to stop listening for auth changes.
 */
export function listenForAuthChanges(callback) {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    callback(user);
  });
  return unsubscribe; // Return the unsubscribe function to clean up the listener
}
