import React, { useEffect, useState } from 'react';
import { AuthContext } from '../AuthContext/AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../../firebase/firebase.config';


const googleAuthProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const logInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)

    }

    const logInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleAuthProvider)
    }

    const signOutUser = () => {
        setLoading(true);
        return signOut(auth)
    }

    const forgetPassword = (email) => {
        setLoading(true)
        return sendPasswordResetEmail(auth, email)
    }


    // get user info

    // onAuthStateChanged(auth, (currentUser) => {
    //     if(currentUser){
    //         console.log(currentUser);

    //     }
    // })

    const updateUserProfile = (name, photoURL) => {
       return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photoURL,
        });
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
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
        logInWithGoogle,
        signOutUser,
        forgetPassword,
        updateUserProfile,

    }

    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;