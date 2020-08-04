import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyC_U_L0Hci46OWT_E21jlaRnJh4SIMBo5I",
  authDomain: "firegram-8a186.firebaseapp.com",
  databaseURL: "https://firegram-8a186.firebaseio.com",
  projectId: "firegram-8a186",
  storageBucket: "firegram-8a186.appspot.com",
  messagingSenderId: "896654701121",
  appId: "1:896654701121:web:52318652ee81eb10b94cc0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFireStore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFireStore, timestamp };