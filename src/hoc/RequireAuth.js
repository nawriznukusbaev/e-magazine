import {useLocation, Navigate} from "react-router-dom";
import {getCookie, getJwtToken} from "../utils";
export const RequireAuth = ({children}) => {
    const location = useLocation();
    if (!getCookie('token')) {
        return <Navigate to='/login' state={{from:location}} replace={true}/>
    }

    else if(getJwtToken('token').is_admin===0){
        return (
            <>
                {children}
            </>
        )
    }





}

