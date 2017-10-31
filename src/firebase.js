let app = null;

const importFirebase = () => {
  return import(/* webpackChunkName: 'firebase' */ 'firebase')
}

const firebase = () => {
  if(app){
    return new Promise((resolve, reject)=>{
      resolve ({
        firebaseDb: app.database().ref(),
        firebaseAuth: app.auth()
      })
    })
  }
  return importFirebase().then((firebase) => {
    const config = {
      apiKey: "AIzaSyBrIxZfBgor6Plc5g5Y7SuxJB3_FacmLEE",
      authDomain: "react-comment-manager.firebaseapp.com",
      databaseURL: "https://react-comment-manager.firebaseio.com",
      projectId: "react-comment-manager"
    };

    app = firebase.initializeApp(config);
    return {
      firebaseDb: app.database().ref(),
      firebaseAuth: app.auth()
    }
  })
}

const withFirebase = (callback) => firebase().then(callback);

export default withFirebase;