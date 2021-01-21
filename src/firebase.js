import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAGMxjEhzxPnu5CpW7nhvytV0y5XDn-GGs",
    authDomain: "useme-6f114.firebaseapp.com",
    projectId: "useme-6f114",
    storageBucket: "useme-6f114.appspot.com",
    messagingSenderId: "609754565645",
    appId: "1:609754565645:web:d402f73a73d552e76fd944",
    measurementId: "G-GVH7GKP763"
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();