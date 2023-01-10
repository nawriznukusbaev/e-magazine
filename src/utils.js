import {useNavigate} from "react-router-dom";

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



export {getItem,setItem,signIn,signOut};