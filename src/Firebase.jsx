import "firebase/auth";
import "firebase/database";
import "firebase/functions";
import "firebase/storage"
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCoe-8cvr1UbJ3UcudmP3nLVXjq0QpYpNk",
  authDomain: "food-delivery-613b3.firebaseapp.com",
  projectId: "food-delivery-613b3",
  storageBucket: "food-delivery-613b3.appspot.com",
  messagingSenderId: "185235627975",
  appId: "1:185235627975:web:1e956f9c71f4c6528943e2",
  measurementId: "G-HRK86VGTRK",
};
  firebase.initializeApp(firebaseConfig)
export default firebase;