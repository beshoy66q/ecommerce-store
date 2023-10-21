import {initializeApp} from 'firebase/app';
import {GoogleAuthProvider, signInWithPopup, signInWithRedirect, getAuth, createUserWithEmailAndPassword, 
  
  signInWithEmailAndPassword, signOut, 
  onAuthStateChanged} 
  from 'firebase/auth';

import {
       doc,
       getDoc,
       getDocs,
       setDoc,
       getFirestore,
       collection,
       writeBatch,
       query,
} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD-0LX8iO22goE9mSATwjVT4DfIfXoJDQI",
    authDomain: "online-store-53a62.firebaseapp.com",
    projectId: "online-store-53a62",
    storageBucket: "online-store-53a62.appspot.com",
    messagingSenderId: "335111191971",
    appId: "1:335111191971:web:8f6f56c987904f27a16e16",
    measurementId: "G-VX6J0XLYY5",
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);


  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
    prompt: "select_account",
  });

  export const auth = getAuth();
  export const popup = () => signInWithPopup(auth,provider);
  export const redirect = () => signInWithRedirect(auth,provider);
  export const db = getFirestore();


  export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
         const collectionRef = collection(db, collectionKey);
         const batch = writeBatch(db);

         objectsToAdd.forEach(object => {
          const docRef = doc(collectionRef, object.title.toLowerCase());
          batch.set(docRef, object)
         });

         await batch.commit();
  }

  export const getCollectionAndDocs = async () => {
        const collectionRef = doc(db, "categories");
        const q = query(collectionRef);

        const querySnapShot = await getDocs(q);

        const categoriesMap = querySnapShot.docs.reduce((acc,docSnapShot) => {
          const { title, items } = docSnapShot.data();

          acc[title.toLowerCase()] = items;
          return acc;
        }, {})
        return categoriesMap;
  }
  
  export const createUserDocumentFromAuth = async (userAuth) => {
    if(!userAuth) return;
      const userDocRef = doc(db, 'users', userAuth.uid);
      console.log(userDocRef);

      const userSnapShot = await getDoc(userDocRef);

      if(!userSnapShot.exists()) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();


        try {
          await setDoc(userDocRef, {
            displayName,
            email,
            createdAt
          })
        } catch(error) {

          console.log("sorry...")
        }
      }

      return userDocRef;
  }

  export const createAdminDocumentFromAuth = async (adminAuth) => {
    if(!adminAuth) return;
      const adminDocRef = doc(db, 'admins', adminAuth.uid);
      console.log(adminDocRef);

      const userSnapShot = await getDoc(adminDocRef);

      if(!userSnapShot.exists()) {
        const {displayName, email} = adminAuth;
        const createdAt = new Date();


        try {
          await setDoc(adminDocRef, {
            displayName,
            email,
            createdAt
          })
        } catch(error) {

          console.log("sorry...")
        }
      }

      return adminDocRef;
  }

  export const createAuthWithEmailAndPassword = async (email,password) => {
    if (!email || !password) return;
    const user = await createUserWithEmailAndPassword(auth, email, password);
    return user;
  }



  
  export const SignInAuthWithEmailAndPassword = async (email,password) => {
    if (!email || !password) return;
    return await signInWithEmailAndPassword(auth, email, password);
  }



  export const createUserDocumentWithEmailAndPassword = async (userAuth) => {
    if(!userAuth) return;
      const userDocRef = doc(db, 'users', userAuth.uid);

      const userSnapShot = await getDoc(userDocRef);

      if(!userSnapShot.exists()) {
        const {email,displayName} = userAuth;
        const createdAt = new Date();

        
        try {
          await setDoc(userDocRef, {
            displayName,
            email,
            createdAt
          })
        } catch(error) {
            console.log("sorry...")
        }
      }

      return userDocRef;
  }
  export const signOutUser = async () => await signOut(auth);
  
  export const onStateChanged = (callback) => {
    onAuthStateChanged(auth,callback);
  }
