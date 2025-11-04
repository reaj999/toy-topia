import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext.jsx';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged } from 'firebase/auth';
import auth from '../Firebase/firebase.init.js';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { signOut } from 'firebase/auth';
import { signInWithPopup } from 'firebase/auth';


const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password, photoURL, name) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password, photoURL, name);
    }

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }


    const signOutUser = () => {
        setLoading(true);
        return signOut(auth);
    }



    // get current user info and auth functions
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('Current User:', currentUser);
            setUser(currentUser);
            setLoading(false);  
        });
        return () => unsubscribe();
    },[])
    


    const userInfo = {
            user,
            loading,
            createUser,
            signInUser,
            signInWithGoogle,
            signOutUser,
        };
    return (
    
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;