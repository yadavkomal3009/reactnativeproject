// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyC7CQfMRmuzz3nxYYhkqEHWo4UxZfFP4-U",
  authDomain: "react-35a81.firebaseapp.com",
  projectId: "react-35a81",
  storageBucket: "react-35a81.firebasestorage.app",
  messagingSenderId: "1082362265278",
  appId: "1:1082362265278:web:4a41c2c2e0df7fd831a8ef",
  measurementId: "G-F8XWNTX5XZ"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
