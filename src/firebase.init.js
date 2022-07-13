// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCYlrM7M00prRgg7lmOECbrpBnEYjikHPo",
    authDomain: "megadeals-32f48.firebaseapp.com",
    projectId: "megadeals-32f48",
    storageBucket: "megadeals-32f48.appspot.com",
    messagingSenderId: "938160904272",
    appId: "1:938160904272:web:70b34edfcc511286add955"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;