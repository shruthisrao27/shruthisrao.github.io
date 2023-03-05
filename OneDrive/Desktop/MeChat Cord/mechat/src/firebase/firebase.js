import firebase from 'firebase/compat/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'
import 'firebase/database'
import "firebase/performance";
var firebaseConfig = {
  apiKey: "AIzaSyChz5crpTu8MtAzVvyPDL5RrxN8KrXUh7Y",
  authDomain: "chatcord-18535.firebaseapp.com",
  projectId: "chatcord-18535",
  storageBucket: "chatcord-18535.appspot.com",
  messagingSenderId: "776556418477",
  appId: "1:776556418477:web:bd992731d7cb3d576cfd24",
  measurementId: "G-W7W5PHZ27Y"
};
  firebase.initializeApp(firebaseConfig);
  export const firestore=firebase.firestore();
  export default firebase;
  export const auth=firebase.auth();
  export const storage=firebase.storage();
  export const perf = firebase.performance();
  export const db=firebase.database();
  export const Googleprovider=new firebase.auth.GoogleAuthProvider();
  // const signinWithGithub=()=>{
//   const provider=new firebase.auth.GithubAuthProvider();
//   auth.signInWithPopup(provider).catch(alert);
// }
  export const CreateUserProfileDocument=()=>{
    const userRef=firestore.collection('users').doc(auth.currentUser.uid);
    userRef.set({
      username:auth.currentUser.displayName,
      useremail:auth.currentUser.email,
      userphoto:auth.currentUser.photoURL,
      createdAt:firebase.firestore.FieldValue.serverTimestamp(),
      roles:{}
    },{merge:true})
  }