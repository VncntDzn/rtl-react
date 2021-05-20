import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDXM3uQRvZbxIy8K1D0KM81of9JHH0HVU8",
    authDomain: "rtl-react.firebaseapp.com",
    projectId: "rtl-react",
    storageBucket: "rtl-react.appspot.com",
    messagingSenderId: "591999720825",
    appId: "1:591999720825:web:25649cf65332564f4aa3a8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;

export const firestore = firebase.firestore(firebase);
export const firebaseStorage = firebase.storage();