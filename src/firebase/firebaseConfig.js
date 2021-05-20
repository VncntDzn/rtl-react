import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCIBCeNZVCRDFyWPM6dYvhv-DvfNJaiVrg",
    authDomain: "rtl-react-6a3d2.firebaseapp.com",
    projectId: "rtl-react-6a3d2",
    storageBucket: "rtl-react-6a3d2.appspot.com",
    messagingSenderId: "139603808935",
    appId: "1:139603808935:web:549852151de6a6cdc74182"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;

export const firestore = firebase.firestore(firebase);
export const firebaseStorage = firebase.storage();