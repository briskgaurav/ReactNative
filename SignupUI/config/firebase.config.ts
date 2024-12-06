import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyByz3Y7N3luI3_qDBgG3ldbdcl8jZAJO68",
  authDomain: "react-native-5923b.firebaseapp.com",
  projectId: "react-native-5923b",
  storageBucket: "react-native-5923b.firebasestorage.app",
  messagingSenderId: "114560146889",
  appId: "1:114560146889:web:89afb27633964017db9c18"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)