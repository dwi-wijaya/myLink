// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getStorage } from 'firebase/storage'
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut
} from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Initialize Firebase
let firebase_app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];


export const FirebaseAuth = getAuth();

export const Authentication = () => {
  return FirebaseAuth;
};

export const SignIn = async (email, password) => {
  await signInWithEmailAndPassword(FirebaseAuth, email, password)
}
export const CreateUser = async (email, password) => {
  await createUserWithEmailAndPassword(FirebaseAuth, email, password)
}

export const GoogleSignIn = async () => {
  const provider = new GoogleAuthProvider();

  const result = await signInWithPopup(getAuth(), provider);

  // If the account doesn't exist, create it
  console.log(result.user);
  if (result.additionalUserInfo.isNewUser) {
    // const { email } = result.user;
    // Use the email as the password for simplicity
    // await createUserWithEmailAndPassword(getAuth(), email, email);
  }
}



export const SignOut = async () => {
  await signOut(FirebaseAuth);
}
export const storage = getStorage(firebase_app, process.env.NEXT_PUBLIC_FIREBASE_STORAGE_PATH)
export default firebase_app;
