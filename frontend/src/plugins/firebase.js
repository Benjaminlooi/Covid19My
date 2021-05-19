const firebase = require("firebase/app");
// Required for side-effects
require("firebase/firestore");

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBh9fPWlAkULKtVKxngMVVGQNEkYOCPauw",
  authDomain: "bensanitymain.firebaseapp.com",
  databaseURL: "https://bensanitymain.firebaseio.com",
  projectId: "bensanitymain",
  storageBucket: "bensanitymain.appspot.com",
  messagingSenderId: "434449604991",
  appId: "1:434449604991:web:06f04d19a1489eaf2afa4a",
  measurementId: "G-02SHCFE8D9"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();