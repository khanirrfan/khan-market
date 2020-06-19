import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAhhykxfPN9Cb6StSiNatgkdXJLOmzP2kI",
    authDomain: "learningproject-16cce.firebaseapp.com",
    databaseURL: "https://learningproject-16cce.firebaseio.com",
    projectId: "learningproject-16cce",
    storageBucket: "learningproject-16cce.appspot.com",
    messagingSenderId: "142687064056",
    appId: "1:142687064056:web:8cf3ed18049112cfd9100d",
    measurementId: "G-5R7V87E15Q"
  }

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      }
      catch(error) {
        console.log(error.message);
      }
    }
  

  return userRef;
  }
  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();

  provider.setCustomParameters({prompt:'select_account'});

  export const signInWithGogle = () => auth.signInWithPopup(provider);

  export default firebase;