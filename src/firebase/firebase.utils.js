import firebase from 'firebase/app'
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAGXusEgz4SABM7R-FES5uELmNvaEuQxqU",
  authDomain: "clothing-9f8f1.firebaseapp.com",
  databaseURL: "https://clothing-9f8f1.firebaseio.com",
  projectId: "clothing-9f8f1",
  storageBucket: "clothing-9f8f1.appspot.com",
  messagingSenderId: "491483107643",
  appId: "1:491483107643:web:f90b53f3b4d5be3dd5a71e"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();
  
  if (!snapshot.exists) {
    const {displayName, email } = userAuth;
    const createAt = new Date()
    try{
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData
      })
    }catch(error){
      console.log('There was an error while creating new user', error.message);
    }
  }
  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account'
});

export const singInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
