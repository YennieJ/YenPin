import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
// };

const firebaseConfig = {
  apiKey: "AIzaSyDYvGOH-GzY07DfKDT_xFxsVIzVM-Dh930",
  authDomain: "cardhome-84e77.firebaseapp.com",
  databaseURL: "https://cardhome-84e77-default-rtdb.firebaseio.com",
  projectId: "cardhome-84e77",
  storageBucket: "cardhome-84e77.appspot.com",
  messagingSenderId: "386860210888",
  appId: "1:386860210888:web:3e8817c7628c50c53363fd",
  measurementId: "G-HFWGKG83GK",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firebaseDatabase = getDatabase(app);
export const storage = getStorage(app);
