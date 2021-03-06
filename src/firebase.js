import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCfXGvwRkFUYtpwInUxcfa8iVVxeDfWebI",
  authDomain: "challenge-35f29.firebaseapp.com",
  databaseURL: "https://challenge-35f29.firebaseio.com",
  projectId: "challenge-35f29",
  storageBucket: "challenge-35f29.appspot.com",
  messagingSenderId: "526437219327",
  appId: "1:526437219327:web:befa9eef7c67d543f5c5ca",
  measurementId: "G-GSB0RD424L",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

//google authentication
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
