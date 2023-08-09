// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLW76Ij5hpb7V7SWGLKT3EkMJI_GeWs1g",
  authDomain: "linkedin-clone-92dc2.firebaseapp.com",
  projectId: "linkedin-clone-92dc2",
  storageBucket: "linkedin-clone-92dc2.appspot.com",
  messagingSenderId: "1031253110034",
  appId: "1:1031253110034:web:786581eb77eaf864d757cb",
  measurementId: "G-K2DGJHCSER"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);