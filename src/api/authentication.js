import withFirebase from '../firebase';

export const login = (email, password) => (
    withFirebase(({firebaseAuth}) => (
        firebaseAuth.signInWithEmailAndPassword(email, password)
    ))
)

export const register = (name, email, password) => (
    withFirebase(({firebaseAuth, firebaseDb}) => (
        firebaseAuth.createUserWithEmailAndPassword(email, password).then((user)=>{
            user.name = name;
            return firebaseDb.child(`users/${user.uid}/info`).set({
                name : user.name,
                email : user.email,
                uid : user.uid
            }).then(()=> user)
        })
    ))    
)

export const logout = () => (
    withFirebase(({firebaseAuth}) => (
        firebaseAuth.signOut()
    ))    
)

export const resetPassword = (email) => (
    withFirebase(({firebaseAuth}) => (
        firebaseAuth.sendPasswordResetEmail(email)
    ))    
)