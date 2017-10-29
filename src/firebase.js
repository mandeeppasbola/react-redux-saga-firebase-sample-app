import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBrIxZfBgor6Plc5g5Y7SuxJB3_FacmLEE",
    authDomain: "react-comment-manager.firebaseapp.com",
    databaseURL: "https://react-comment-manager.firebaseio.com",
    projectId: "react-comment-manager",
    storageBucket: "react-comment-manager.appspot.com",
    messagingSenderId: "460178174997"
  };
  firebase.initializeApp(config);
  
  export const auth =  firebase.auth();
  export const database = firebase.database().ref();