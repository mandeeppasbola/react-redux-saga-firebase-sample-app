import {database, auth} from 'firebase';

const config = {
    apiKey: "AIzaSyBrIxZfBgor6Plc5g5Y7SuxJB3_FacmLEE",
    authDomain: "react-comment-manager.firebaseapp.com",
    databaseURL: "https://react-comment-manager.firebaseio.com",
    projectId: "react-comment-manager"
  };
  firebase.initializeApp(config);
  
  export const firebaseAuth =  auth();
  export const firebaseDb = database().ref();