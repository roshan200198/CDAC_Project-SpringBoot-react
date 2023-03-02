// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// const firebaseConfig = {
//   apiKey: process.env.API_KEY,
//   authDomain: process.env.AUTHDOMAIN,
//   projectId: process.env.PROJECTID,
//   storageBucket: process.env.STORAGEBUCKET,
//   messagingSenderId: process.env.MESSAGINGSENDERID,
//   appId: process.env.APPID,
//   measurementId: process.env.MEASUREMENTID
// };

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAD3L9ht0943gAa7KIUltqLMJqDWNd1FF0",
    authDomain: "novaturient-traveller.firebaseapp.com",
    projectId: "novaturient-traveller",
    storageBucket: "novaturient-traveller.appspot.com",
    messagingSenderId: "435685533875",
    appId: "1:435685533875:web:c5a56ec3c87bd62e50e8c6",
    measurementId: "G-10RKBYL69G"
  };

//console.log(firebaseConfig);
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
const googleProvider =new GoogleAuthProvider();

//we are going to sign in with google
const signInWithGoogle = async () => {
    try{ 
        const res = await signInWithPopup(auth, googleProvider);
        console.log(res.user);

    }
    catch (err) {
        console.log(err);
    }
}


//we are going to sign out with google
export {app, analytics, auth, googleProvider, signInWithGoogle};
