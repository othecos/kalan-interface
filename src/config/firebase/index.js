
// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
// We only want to use Firebase Auth here
import "firebase/auth";

// Your app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZNSNmn1QZc2gxFVwt3_eydptsAocnczI",
  authDomain: "stock-history-backend.firebaseapp.com",
  databaseURL: "https://stock-history-backend.firebaseio.com",
  projectId: "stock-history-backend",
  storageBucket: "stock-history-backend.appspot.com",
  messagingSenderId: "406838924221",
  appId: "1:406838924221:web:71ede94e95f775776778d4"
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Finally, export it to use it throughout your app
export default firebase;


