import {firebaseAuth, firebaseDb} from '../firebase';

export const login = (email, password) => (
    firebaseAuth.signInWithEmailAndPassword(email, password)
)

export const register = (name, email, password) => (
    firebaseAuth.createUserWithEmailAndPassword(email, password).then((user)=>{
        user.name = name;
        return firebaseDb.child(`users/${user.uid}/info`).set({
            name : user.name,
            email : user.email,
            uid : user.uid
        }).then(()=> user)
    })
)

export const logout = () => (
    firebaseAuth.signOut()
)

export const resetPassword = (email) => (
    firebaseAuth.sendPasswordResetEmail(email)
)