import {database, auth} from '../firebase';

export const login = (email, password) => (
    auth.signInWithEmailAndPassword(email, password)
)

export const register = (name, email, password) => (
    auth.createUserWithEmailAndPassword(email, password).then((user)=>{
        user.name = name;
        return database.child(`users/${user.uid}/info`).set({
            name : user.name,
            email : user.email,
            uid : user.uid
        }).then(()=> user)
    })
)

export const logout = () => (
    auth.signOut()
)

export const resetPassword = (email) => (
    auth.sendPasswordResetEmail(email)
)