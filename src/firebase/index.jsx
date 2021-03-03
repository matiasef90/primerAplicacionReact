import firebase from 'firebase/app';
import '@firebase/firestore';

const app = firebase.initializeApp(
  {
    apiKey: "AIzaSyDPL__ftrhlG8mES9kmJs-qpgPemZ497Gw",
    authDomain: "e-commers-books.firebaseapp.com",
    databaseURL: "https://e-commers-books-default-rtdb.firebaseio.com",
    projectId: "e-commers-books",
    storageBucket: "e-commers-books.appspot.com",
    messagingSenderId: "680290128307",
    appId: "1:680290128307:web:3ba378a8f5946d33337bc6",
    measurementId: "G-XCJDRLTPD4"
  }
  );
  
export const getFirebase = () =>{
  return app;
}
export const getFirestore = () =>{
  return firebase.firestore(app);
}
