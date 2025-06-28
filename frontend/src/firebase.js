// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3fZm_VAQ4-mY_LlVB8S2_-pSpzZbMb1o",
  authDomain: "ai-assistant-auth-c2567.firebaseapp.com",
  projectId: "ai-assistant-auth-c2567",
  storageBucket: "ai-assistant-auth-c2567.appspot.com",
  messagingSenderId: "797319077126",
  appId: "1:797319077126:web:9346163943a2701b93d287",
  measurementId: "G-BZW56VT3R8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC3fZm_VAQ4-mY_LlVB8S2_-pSpzZbMb1o",
  authDomain: "ai-assistant-auth-c2567.firebaseapp.com",
  projectId: "ai-assistant-auth-c2567",
  messagingSenderId: "797319077126",
  appId: "1:797319077126:web:9346163943a2701b93d287",
  measurementId: "G-BZW56VT3R8"
};



