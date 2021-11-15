import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

var firebaseConfig = {
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();