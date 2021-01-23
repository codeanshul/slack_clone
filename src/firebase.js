// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChnhMZZB8fhj8RCGIkRD-pyZIoszx8HMQ",
  authDomain: "slack-clone-2-d4b2d.firebaseapp.com",
  projectId: "slack-clone-2-d4b2d",
  storageBucket: "slack-clone-2-d4b2d.appspot.com",
  messagingSenderId: "928407211343",
  appId: "1:928407211343:web:7d37f6dd5abd564f46893a",
  measurementId: "G-E15175NS8P"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export{ auth, provider};
  export default db;