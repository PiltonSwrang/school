import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage'

const firebaseConfig = {
    apiKey: "AIzaSyAigYoSi_NiVMsdeluleF4M0UxQs4dgJgo",
    authDomain: "classroom-b035b.firebaseapp.com",
    projectId: "classroom-b035b",
    storageBucket: "classroom-b035b.appspot.com",
    messagingSenderId: "224651513929",
    appId: "1:224651513929:web:bae9a53a51026f87e2af98",
    measurementId: "G-NKVRQGRBJH"
};

if (!firebase.apps.length) {
    console.log('firebase initialised');
    firebase.initializeApp(firebaseConfig)
}

export const auth = firebase.auth()
export const firestore = firebase.firestore()
export const increment = firebase.firestore.FieldValue.increment
export const storage = firebase.storage()
export const timestamp = firebase.firestore.FieldValue.serverTimestamp()