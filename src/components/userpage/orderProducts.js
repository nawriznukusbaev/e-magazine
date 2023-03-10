import TextField from "@mui/material/TextField";
import {Box} from "@mui/material";
import {Button} from "@mui/material";
import {useForm} from "react-hook-form";
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import {useState} from "react";
import {Switch} from "@mui/material";
import {toast} from "react-toastify";
import {style} from "../../components/modal_style";



export const OrderProducts = ({data,itemId}) => {
    const orders=data.filter(order=>order.id===itemId);
    return (
        <Box
            component="form"
            sx={style}
            noValidate
            autoComplete="off"
        >
            <div className="flex flex-col">
                {orders.map((item,index)=>{
                    return <div>{item}</div>
                })}
            </div>

        </Box>
    )
}