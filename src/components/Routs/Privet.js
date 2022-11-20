import React, {  useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Probaider/AuthProvaider';

const Privet = ({children}) => {
    const {user,loding}=useContext(AuthContext)
    const location=useLocation();
    if(loding){
        return <h3>loding RRRRRRRRRRRRR</h3>
    }
    if(user && user.uid){
        return children;
    }

    return <Navigate to="/login" state={{form:location}}></Navigate>
};

export default Privet;