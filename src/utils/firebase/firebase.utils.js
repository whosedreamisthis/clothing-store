import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAJmWWKZQz0ESGJ3bvR0Utbs5KuexvN3mo",
  authDomain: "ecommerce-db-6c410.firebaseapp.com",
  projectId: "ecommerce-db-6c410",
  storageBucket: "ecommerce-db-6c410.appspot.com",
  messagingSenderId: "294336704250",
  appId: "1:294336704250:web:962b6dd8b308fa76a9e343",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => {
  return signInWithPopup(auth, provider);
};
export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createAt,
      });
    } catch (err) {
      console.log("error creating the user ", err.message);
    }
  }
  return userDocRef;
};
