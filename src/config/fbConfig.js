import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyBvPm4X7el_hesNpNw_aFrjFgEC8B0kemY",
    authDomain: "come-unity-b8326.firebaseapp.com",
    databaseURL: "https://come-unity-b8326.firebaseio.com",
    projectId: "come-unity-b8326",
    storageBucket: "come-unity-b8326.appspot.com",
    messagingSenderId: "20996591600",
    appId: "1:20996591600:web:5046c72b3caaf3af221735",
    measurementId: "G-9G6JJS14S4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebase;