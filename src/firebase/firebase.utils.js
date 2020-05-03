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

//  Storing user in a database
  export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	  const userRef = firestore.doc(`users/${userAuth.uid}`);
	 const snapShot = await  userRef.get();

	 if (!snapShot.exists) {
		 const {displayName, email }= userAuth;
		 const createdAt = new Date();

		 try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData
			})
		 } catch (error) {
			console.log('error creating user', error.message);
		 }
	 }
	 return userRef;
  };

  firebase.initializeApp(config);

  export const addCollectionAndDocuments = async (collectionKey, objectsToAdd ) => {
	  const collectionRef = firestore.collection(collectionKey);

	  const batch = firestore.batch();
	  objectsToAdd.forEach(obj => {
		  const newDocRef =  collectionRef.doc();
		  batch.set(newDocRef, obj);
	  });

	 return await batch.commit()
  };

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
