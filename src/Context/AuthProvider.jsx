import React from 'react';
import { AuthContext } from './AuthContext.jsx';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import auth from '../Firebase/firebase.init.js';

const AuthProvider = ({ children }) => {

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const userInfo = {
            name: "ABCD",
            email: "abcd@abcd.com",
        };
    return (
    
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;