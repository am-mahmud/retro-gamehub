import React, {useEffect, useState } from 'react';
import { AuthContext } from '../AuthContext/AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/firebase.config';

const AuthProvider = ({children}) => {

    const [user, setUser] = useState()

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth,email, password);
    }

    const logInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
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
            
        })
        return () => {
            unsubscribe
        }
    }, [])



    const authInfo = {
        user,
        createUser,
        logInUser,
    }

    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;