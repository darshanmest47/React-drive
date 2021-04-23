import firebase from 'firebase'


// const firebaseConfig = {
//   apiKey: "AIzaSyBYaeipf3s1P5KTusW0hGz_zbLDJIqEuWE",
//   authDomain: "personal--drive.firebaseapp.com",
//   projectId: "personal--drive",
//   storageBucket: "personal--drive.appspot.com",
//   messagingSenderId: "329242503236",
//   appId: "1:329242503236:web:cdad175e8f1ea937eb3411"
// };


  const firebaseConfig = {
    apiKey: "AIzaSyD_ovcUthrxsA3H6sHvD95dLWK2mSJMBm8",
    authDomain: "reactredux-firebase-c2b1e.firebaseapp.com",
    databaseURL: "https://reactredux-firebase-c2b1e.firebaseio.com",
    projectId: "reactredux-firebase-c2b1e",
    storageBucket: "reactredux-firebase-c2b1e.appspot.com",
    messagingSenderId: "860490248688",
    appId: "1:860490248688:web:752e3fdf3333d169492d35",
    measurementId: "G-28TWY446EK"
  };



   const firebaseApp = firebase.initializeApp(firebaseConfig)
   const db = firebaseApp.firestore()
   const storage = firebase.storage()
   const auth = firebase.auth()
   const provider = new firebase.auth.GoogleAuthProvider()

   export {db,storage,auth,provider}

  

 
