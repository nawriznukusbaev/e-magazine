import {useLocation, Navigate} from "react-router-dom";
import {useAuth} from "../hook/useAuth";
import {getCookie} from "../utils";
export const RequireAuth = ({children}) => {
    const location = useLocation();
    if (!getCookie('token')) {
        return <Navigate to='login' state={{from:location}} replace/>
    }
    return (
        <>
            {children}
        </>
    )
    return <Navigate to={'login'} state={{from: location}}/>

}

