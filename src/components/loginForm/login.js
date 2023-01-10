import * as React from 'react';
import TextField from '@mui/material/TextField';
import {Button} from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {useRef} from "react";
import {useLocation, useNavigate,Navigate} from "react-router-dom";
import {useAuth} from "../../hook/useAuth";
import {getItem} from "../../utils";

export const Login = (props) => {
    const loginRef = useRef();
    const passwordRef = useRef();
    const navigate = useNavigate();
    const location = useLocation();
    const {signIn} = useAuth();


    const fromPage = location.state?.from?.pathname || '/admin'

    function auth() {
        const login = loginRef.current.value;
        const password = passwordRef.current.value;

        if (login === 'admin' && password === 'admin') {
            signIn(true, () => navigate('/admin', {replace: true}));
        }
    }

    /* if (getItem('auth') === true) {
        console.log(getItem('auth'));
         const navigateTo= ()=>{
             return <Navigate to={'/admin'}/>
         }
         navigateTo();
     }*/


    return (
        <div className="container mx-auto flex flex-col h-[100vh] justify-center items-center">
            <p className="text-3xl font-bold mb-[30px]">Авторизация</p>
            <div
                className="flex flex-col justify-between w-[300px] h-[200px] p-[10px] border-2 border-inherit border-solid">
                <TextField
                    id="outlined-required"
                    label="Логин"
                    inputRef={loginRef}
                />
                <TextField
                    id="outlined-password-input"
                    label="Пароль"
                    type="password"
                    autoComplete="current-password"
                    inputRef={passwordRef}
                />
                <Button variant="contained" startIcon={<AccountCircleIcon/>} onClick={() => {
                    auth();
                }}>
                    Войти
                </Button>
            </div>
        </div>
    );
}