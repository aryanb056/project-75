import firebase from 'firebase'
require("@firebase/firestore")


// Initialize Firebase
var firebaseConfig = {
  apiKey: "AIzaSyDDWkIMBQOfK9_R2GbGd9cWCtfqfsnN8RI",
  authDomain: "newsletter-d8901.firebaseapp.com",
  databaseURL: "https://newsletter-d8901-default-rtdb.firebaseio.com",
  projectId: "newsletter-d8901",
  storageBucket: "newsletter-d8901.appspot.com",
  messagingSenderId: "460498638789",
  appId: "1:460498638789:web:b98ad83b689b3ae119ddac"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore()      