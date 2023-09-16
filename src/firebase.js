import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCnAoqyDCsoV6lwYh7zBDp9OUkhUoPAsXs",
  authDomain: "e-shop-5cc19.firebaseapp.com",
  projectId: "e-shop-5cc19",
  storageBucket: "e-shop-5cc19.appspot.com",
  messagingSenderId: "854447995680",
  appId: "1:854447995680:web:881cca945004f56213f545",
  databaseURL:"https://e-shop-5cc19.firebaseio.com"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
