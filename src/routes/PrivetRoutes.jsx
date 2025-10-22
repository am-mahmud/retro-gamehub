import React, { use } from 'react';
import { AuthContext } from '../contexts/AuthContext/AuthContext';
import { Navigate } from 'react-router';

const PrivetRoutes = ({children}) => {

    const {user, loading} = use(AuthContext);

    if (loading){
        return
    }
    if(user ){
        return children;
    }

    return <Navigate to="/login"></Navigate>
};

export default PrivetRoutes;