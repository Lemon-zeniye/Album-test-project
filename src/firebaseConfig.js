import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAKvUj2GYgOqpeI7IF_40Cc_WtxaYYOS94",
  authDomain: "album-test-project.firebaseapp.com",
  projectId: "album-test-project",
  storageBucket: "album-test-project.appspot.com",
  messagingSenderId: "882981598417",
  appId: "1:882981598417:web:d4d420cc1fa15b26ac81f0",
  measurementId: "G-NG0184EGKM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
