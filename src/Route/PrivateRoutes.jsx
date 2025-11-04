import React from 'react';
import { use } from 'react';
import { AuthContext } from '../Context/AuthContext.jsx';
import { Navigate, useLocation } from 'react-router';

const PrivateRoutes = ({children}) => {
    const {user, loading} = use(AuthContext);

    const location = useLocation();

    if(loading){
        return <span className="loading loading-spinner loading-xl"></span>;
    }
    if(user){
        return children;
    }
    return <Navigate to="/Login"></Navigate>;
};

export default PrivateRoutes;