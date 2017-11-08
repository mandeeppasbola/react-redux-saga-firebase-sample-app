let app = null;

const importFirebase = () => {
  return import(/* webpackChunkName: 'firebase' */ 'firebase')
}

const firebase = () => {
  return importFirebase().then((firebase) => {
    const config = {
      apiKey: "AIzaSyBrIxZfBgor6Plc5g5Y7SuxJB3_FacmLEE",
      authDomain: "react-comment-manager.firebaseapp.com",
      databaseURL: "https://react-comment-manager.firebaseio.com",
      projectId: "react-comment-manager"
    };

    if (!firebase.apps.length) {
      app = firebase.initializeApp(config);
    }    
    return {
      firebaseDb: app.database().ref(),
      firebaseAuth: app.auth()
    }
  })
}

const withFirebase = (callback) => firebase().then(callback);

export default withFirebase;