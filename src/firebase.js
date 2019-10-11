import * as firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyDHaTPaicvBaU7Adv_BuWXO8HskIi7rM1E",
    authDomain: "formstest-4ab53.firebaseapp.com",
    databaseURL: "https://formstest-4ab53.firebaseio.com",
    projectId: "formstest-4ab53",
    storageBucket: "formstest-4ab53.appspot.com",
    messagingSenderId: "1003331891075",
    appId: "1:1003331891075:web:427f0c0675fdfdc9b750b6",
    measurementId: "G-SZC0QJBY8H"
  };

firebase.initializeApp(firebaseConfig);

const firebaseDB = firebase.database();
const googleAuth = new firebase.auth.GoogleAuthProvider();

//exporting the firebase

export { firebaseDB , googleAuth , firebase };
  