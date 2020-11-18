// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCL1QVIhQUJC5krgBXbxKV_RSLOJYC2TRw",
    authDomain: "slack-clone-c2062.firebaseapp.com",
    databaseURL: "https://slack-clone-c2062.firebaseio.com",
    projectId: "slack-clone-c2062",
    storageBucket: "slack-clone-c2062.appspot.com",
    messagingSenderId: "735482737375",
    appId: "1:735482737375:web:81dd81a4ba8ff4a8456f6a",
    measurementId: "G-MDDPRCMCS6"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export{ auth, provider};
  export default db;