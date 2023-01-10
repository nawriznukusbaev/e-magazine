import {useLocation, Navigate} from "react-router-dom";
import {useAuth} from "../hook/useAuth";
export const RequireAuth = ({children}) => {
    const location = useLocation();
    let {authState} = useAuth();
    console.log(authState);
    if (authState) {
        return children
    }
    return <Navigate to={'/login'} state={{from: location}}/>

}

