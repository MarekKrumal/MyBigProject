// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {  
  apiKey: "AIzaSyDDQri-tgii2EwYsYiHKF9xwvOWuRlmYgg",
  authDomain: "mynetflixclone-8108f.firebaseapp.com",
  projectId: "mynetflixclone-8108f",
  storageBucket: "mynetflixclone-8108f.appspot.com",
  messagingSenderId: "910069675429",
  appId: "1:910069675429:web:2d0986470d067b352ea44c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)






