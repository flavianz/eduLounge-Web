import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB6Ju3pZB8njMi202gOOtp0UTTqeFY-uPo",
  authDomain: "edulounge-6b112.firebaseapp.com",
  projectId: "edulounge-6b112",
  storageBucket: "edulounge-6b112.appspot.com",
  messagingSenderId: "851483564872",
  appId: "1:851483564872:web:f62ba3af5832b40e72317d",
  measurementId: "G-NNH9MVE04D",
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
