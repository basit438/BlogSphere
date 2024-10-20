 // Import the functions you need from the SDKs you need
 import { initializeApp } from "firebase/app";
 import { getAuth , GoogleAuthProvider } from "firebase/auth";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries
 
 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyDdpBLCmuHwlSEHshnorPwk5hAnuTkvLHM",
   authDomain: "authentication-d7c71.firebaseapp.com",
   projectId: "authentication-d7c71",
   storageBucket: "authentication-d7c71.appspot.com",
   messagingSenderId: "861718536385",
   appId: "1:861718536385:web:95a0636f98452dfaa67440"
 };
 
 // Initialize Firebase
 const app = initializeApp(firebaseConfig);

 export const auth = getAuth(app);

 export const googleauthprovider = new GoogleAuthProvider();
