import TextField from "@mui/material/TextField";
import {Box} from "@mui/material";
import {Button} from "@mui/material";
import {useForm} from "react-hook-form";
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import {useState} from "react";
import {Switch} from "@mui/material";
import {toast} from "react-toastify";
import {style} from "../../modal_style";



export const OrderProducts = ({data}) => {
    console.log('order_details',data.order_details);
    return (
        <Box
            component="form"
            sx={style}
            noValidate
            autoComplete="off"
        >
            <div className="flex flex-col">
                {data.order_details.map((item,index)=>{
                    return <p key={index}>{item.product_id}</p>
                })}
            </div>

        </Box>
    )
}