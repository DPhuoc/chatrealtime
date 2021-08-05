import firebase from 'firebase/app';

import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyBzvmJ2XkbqjTyBiz3VUBNkuW1gaxcD00M",
  authDomain: "chat-app-e3e0b.firebaseapp.com",
  projectId: "chat-app-e3e0b",
  storageBucket: "chat-app-e3e0b.appspot.com",
  messagingSenderId: "1003609281949",
  appId: "1:1003609281949:web:3eb8076c670eaa4553cb74",
  measurementId: "G-SX6QS5JYEF"
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
const db = firebase.firestore();

if (window.location.hostname === 'localhost') {
  // auth.useEmulator('http://localhost:9099');
  // db.useEmulator('localhost', '8080');
}

export { db, auth };
export default firebase;
