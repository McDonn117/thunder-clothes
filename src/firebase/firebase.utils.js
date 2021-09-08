import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const config = {
    apiKey: "AIzaSyBd99r-p2FZEZbcyJXOE3XR0hXYVna60K8",
    authDomain: "thunder-clothes.firebaseapp.com",
    projectId: "thunder-clothes",
    storageBucket: "thunder-clothes.appspot.com",
    messagingSenderId: "10452753469",
    appId: "1:10452753469:web:9c3747e27bb25b0d9cde54",
    measurementId: "G-45DJS088RF"
};

//Initialize
const firebaseApp = initializeApp(config);

//Auth
export const auth = getAuth();

//Sign in with Google
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => signInWithPopup(auth, provider)
.then((result) => {
  // This gives you a Google Access Token. You can use it to access the Google API.
  const credential = GoogleAuthProvider.credentialFromResult(result);
  const token = credential.accessToken;
  // The signed-in user info.
  const user = result.user;
  // ...
}).catch((error) => {
  // Handle Errors here.
  const errorCode = error.code;
  const errorMessage = error.message;
  // The email of the user's account used.
  const email = error.email;
  // The AuthCredential type that was used.
  const credential = GoogleAuthProvider.credentialFromError(error);
  // ...
});



//Firestore
export const firestore = getFirestore();

export default firebaseApp;