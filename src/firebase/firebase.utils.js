import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config =
{
    apiKey: "AIzaSyBwpMF5oE4-drdnhmWxFPTCeR9c86wjczU",
    authDomain: "music-db-de7c6.firebaseapp.com",
    databaseURL: "https://music-db-de7c6.firebaseio.com",
    projectId: "music-db-de7c6",
    storageBucket: "music-db-de7c6.appspot.com",
    messagingSenderId: "801589292073",
    appId: "1:801589292073:web:0d680aac77c1bfaf720038",
    measurementId: "G-ZWZML3ERFH"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
