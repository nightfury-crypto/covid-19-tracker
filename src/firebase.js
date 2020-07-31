
import firebase from "firebase"
const firebaseConfig = {
  apiKey: "AIzaSyDpCPEk-305jqsQ8hEajCOfCtQh-4Wtev8",
  authDomain: "karnail-app.firebaseapp.com",
  databaseURL: "https://karnail-app.firebaseio.com",
  projectId: "karnail-app",
  storageBucket: "karnail-app.appspot.com",
  messagingSenderId: "28075573218",
  appId: "1:28075573218:web:50e597098b7fc5c24383bb",
  measurementId: "G-7NXE7XCQQ8"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebase.firestore();

export default database;