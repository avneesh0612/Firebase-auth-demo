import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDcm355Vya1Kegi_AIBXENL2UgjZwE3vYU",
  authDomain: "fir-auth-demo-99bf4.firebaseapp.com",
  projectId: "fir-auth-demo-99bf4",
  storageBucket: "fir-auth-demo-99bf4.appspot.com",
  messagingSenderId: "825591458421",
  appId: "1:825591458421:web:dd566d263ac9fad0f1663c",
  measurementId: "G-FD6JRHLCX9",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
