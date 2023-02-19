import {useNavigate} from "react-router-dom";
import jwtDecode from "jwt-decode";
import {Cookies} from "react-cookie";
function getItem(value){
   let getValue = JSON.parse(sessionStorage.getItem(value));
   return getValue;
}

function setItem(key,value){
    sessionStorage.setItem(key, JSON.stringify(value));
}

const signIn = (newAuth, fun) => {
    setItem('auth',newAuth);
    fun();
}

const signOut = (fun) => {
    setItem('auth',false)
    fun();
}

const getCookie=(name)=>{
    const cookie= new Cookies();
    const cookieData=cookie.get(name);
    return cookieData;
}
const getJwtToken=(name) =>{
    return jwtDecode(getCookie(name));
}

export {getItem,setItem,signIn,signOut,getJwtToken,getCookie};