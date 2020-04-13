import firebase from 'firebase/app'
import  'firebase/firestore'
import  'firebase/auth'
const config ={
    apiKey: "AIzaSyCnKfWtkNqUNkeBYtac4a-60-fU4OkpVGg",
    authDomain: "seb-fashionhouse.firebaseapp.com",
    databaseURL: "https://seb-fashionhouse.firebaseio.com",
    projectId: "seb-fashionhouse",
    storageBucket: "seb-fashionhouse.appspot.com",
    messagingSenderId: "23048595949",
    appId: "1:23048595949:web:0bc4c6123f1890bdd9dfe4",
    measurementId: "G-0SCHVY3G1N"
  };
  
  export const createUserProfileDocument = async (userAuth, additionalData ) => {
      if(!userAuth) return
      const userRef = firestore.doc(`users/${userAuth.uid}`)
      const snapShot =await userRef.get()
      
      if(!snapShot.exists) {
        const { displayName, email } = userAuth
        const createdAt = new Date()
      
      try{
        await userRef.set({
          displayName:displayName,
          email:email,
          createdAt:createdAt,
          ...additionalData
        })
      } catch(err){
        console.log('error creating user')
      }
    }
    
    return userRef
  }

  firebase.initializeApp(config)

  export const auth = firebase.auth()
  export const firestore = firebase.firestore()

  const provider = new firebase.auth.GoogleAuthProvider()
  provider.setCustomParameters({prompt:'select_account'})

  export const signInWithGoogle = ()=>auth.signInWithPopup(provider)

  export default firebase