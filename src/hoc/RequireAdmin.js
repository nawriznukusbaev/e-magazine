import {useLocation, Navigate} from "react-router-dom";
import {getCookie, getJwtToken} from "../utils";
import {useDispatch, useSelector} from "react-redux";
import {addData} from "../store/slices/LoginSlice";
import {useEffect} from "react";
export const RequireAdmin= ({children}) => {

    const dispatch = useDispatch();
    const login = useSelector(state => state.login);
    useEffect(()=>{
        if(login.exp===0){
            dispatch(addData(getJwtToken('token')));
        }
    },[])
    if(getJwtToken('token').is_admin!==1){
        return <Navigate to='/' replace={true}/>
    }
    return (
        <>
            {children}
        </>
    )
}

