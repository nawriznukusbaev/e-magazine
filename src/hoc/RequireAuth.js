import {useLocation, Navigate} from "react-router-dom";
import {useAuth} from "../hook/useAuth";
import {getCookie, getJwtToken} from "../utils";
export const RequireAuth = ({children}) => {
    const location = useLocation();
    if (!getCookie('token')) {
        return <Navigate to='login' state={{from:location}} replace/>
    }

    else if(getJwtToken('token').is_admin===0){
        return (
            <>
                {children}
            </>
        )
    }





}

