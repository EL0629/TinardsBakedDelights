import firebase from 'firebase/app'

import "firebase/auth"

var firebaseConfig = {
    apiKey: "AIzaSyC5X5gy_bRIUzas50h1kufC2jpQcaZjL_I",
    authDomain: "tinardsbakeddelight.firebaseapp.com",
    projectId: "tinardsbakeddelight",
    storageBucket: "tinardsbakeddelight.appspot.com",
    messagingSenderId: "372710874958",
    appId: "1:372710874958:web:2fb3f79d5fa5df3eac081f",
    measurementId: "G-7TM45NFKJP"
};

let firebaseApp = firebase.initializeApp(firebaseConfig)
let firebaseAuth = firebaseApp.auth()

export { firebaseAuth }