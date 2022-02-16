
import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyAsj98sProqSNkZybTspC3MZ_QRn3lk3V8",
  authDomain: "facebook-clone-be577.firebaseapp.com",
  projectId: "facebook-clone-be577",
  storageBucket: "facebook-clone-be577.appspot.com",
  messagingSenderId: "935554598076",
  appId: "1:935554598076:web:a81809ad38a1a7a3d33cb9",
  measurementId: "G-371FKTLPX5",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth=firebase.auth();
const provider =new firebase.auth.GoogleAuthProvider();

export  { auth, provider };
export default db