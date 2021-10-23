import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCiKtWUDYufnGKjU8O10BSJN3hdsscGzY0",
  authDomain: "crud-6da25.firebaseapp.com",
  projectId: "crud-6da25",
  storageBucket: "crud-6da25.appspot.com",
  messagingSenderId: "989929369026",
  appId: "1:989929369026:web:6da6eaa6622c0045717a5b",
};

// Initialize Firebase
export const firebaseApp = firebase.initializeApp(firebaseConfig);
