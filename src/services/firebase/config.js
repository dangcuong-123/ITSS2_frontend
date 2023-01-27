// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app'
import 'firebase/compat/storage';

export const firebaseConfig = {
    apiKey: "AIzaSyDXBuhyiIywhPSM2M3e_Ff_QlU7umO8GRk",
    authDomain: "phongmt-uploadimage.firebaseapp.com",
    projectId: "phongmt-uploadimage",
    storageBucket: "phongmt-uploadimage.appspot.com",
    messagingSenderId: "708264439078",
    appId: "1:708264439078:web:cae123de8ab824deb465e7",
    measurementId: "G-PG82LR1T2B"
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };