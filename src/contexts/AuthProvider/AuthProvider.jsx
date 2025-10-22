import React, {useEffect, useState } from 'react';
import { AuthContext } from '../AuthContext/AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../../firebase/firebase.config';

const AuthProvider = ({children}) => {

    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email, password);
    }

    const logInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signOutUser = () => {
        setLoading(true);
        return signOut(auth)
    }

    
    // get user info

    // onAuthStateChanged(auth, (currentUser) => {
    //     if(currentUser){
    //         console.log(currentUser);
            
    //     }
    // })

    useEffect(() => {
     const unsubscribe =   onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser);
            setUser(currentUser)
            setLoading(false)
            
        })
        return () => {
            unsubscribe
        }
    }, [])



    const authInfo = {
        user,
        loading,
        createUser,
        logInUser,
        signOutUser,
        
    }

    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;