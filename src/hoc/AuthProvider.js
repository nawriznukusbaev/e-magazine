import {createContext, useState, useEffect} from "react";
import {useLocation,Navigate} from "react-router-dom";
import {getCookie} from "../utils";
export const AuthContext = createContext(null);

export const AuthProvider = ({children}) => {
    const location = useLocation();

    if(getCookie('token')) {
        return <Navigate to='/' state={{from:location}} replace/>
    }
    return (
        <>
        {children}
        </>
    );
}