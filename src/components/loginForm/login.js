import * as React from 'react';
import TextField from '@mui/material/TextField';
import {Button} from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {useRef} from "react";
import {useLocation, useNavigate,Navigate} from "react-router-dom";
import {useAuth} from "../../hook/useAuth";
import {getItem, getJwtToken} from "../../utils";
import {useSignInMutation} from "../../store/slices/AuthSlice";
import {Cookies} from "react-cookie";
import {addData} from "../../store/slices/LoginSlice";
import jwtDecode from "jwt-decode";
import {useDispatch} from "react-redux";
import {toast} from "react-toastify";

export const Login = (props) => {
    const loginRef = useRef();
    const passwordRef = useRef();
    const navigate = useNavigate();
    const location = useLocation();

    const [login,result]=useSignInMutation();
    const cookie = new Cookies()
    const fromPage = location.state?.from?.pathname || '/admin'
    const dispatch=useDispatch();
    async function  auth() {
        const username= loginRef.current.value;
        const password = passwordRef.current.value;

        const data={
            username:username,
            password:password
        }

        await login(data)
            .unwrap()
            .then((response)=>{
                const decode = jwtDecode(response.access_token)
                console.log(response)
                console.log('Decode',decode)
                cookie.set('token',response.access_token)
                dispatch(addData(decode))
                navigate(fromPage,{replace:true})
                toast(`Welcome ${decode.sub}`, {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                })
            })
            .catch(e=>{
                console.log(e)
            });

    }



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
                <Button variant="contained" disabled={result.isLoading} startIcon={<AccountCircleIcon/>} onClick={() => {
                    auth();
                }}>
                    Войти
                </Button>
            </div>
        </div>
    );
}