import * as React from 'react';
import TextField from '@mui/material/TextField';
import {Button} from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {useRef} from "react";
import {useLocation, useNavigate, Navigate, Link} from "react-router-dom";
import {useSignInMutation} from "../../store/slices/AuthSlice";
import {Cookies} from "react-cookie";
import {addData} from "../../store/slices/LoginSlice";
import jwtDecode from "jwt-decode";
import {useDispatch} from "react-redux";
import {toast} from "react-toastify";
import {useGetCountriesQuery} from "../../store/slices/CountriesSlice";
import Modal from "@mui/material/Modal";
import {AddUser} from "../admin/users/addUser";

export const Login = () => {
    const loginRef = useRef();
    const passwordRef = useRef();
    const navigate = useNavigate();
    const location = useLocation();
    const [login,result]=useSignInMutation();
    const cookie = new Cookies()
    const fromPage = location.state?.from?.pathname || '/admin'
    const dispatch=useDispatch();

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const {data:dataCountry} = useGetCountriesQuery();

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
                cookie.set('token',response.access_token)
                dispatch(addData(decode))
                navigate(fromPage,{replace:true})
                toast(`Добро пожаловать ${decode.sub}`, {
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
            <div className="flex flex-row">
                <p className="pr-[15px]">Нет аккаунта</p>
                <button className="text-blue-700" onClick={handleOpen}>Зарегистрироваться
                    {dataCountry && <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        {dataCountry && <AddUser dataCountry={dataCountry}/>}
                    </Modal>}
                </button>
            </div>
        </div>
    );
}