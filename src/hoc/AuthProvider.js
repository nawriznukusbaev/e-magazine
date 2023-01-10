import {createContext, useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import {auth} from "../store/slices/AuthSlice";
import {getItem,setItem,signOut,signIn} from "../utils";
export const AuthContext = createContext(null);

export const AuthProvider = ({children}) => {
    const authState=getItem('auth')

    const value = {authState, signOut, signIn}
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>

    );
}