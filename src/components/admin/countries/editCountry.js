import TextField from "@mui/material/TextField";
import {Box} from "@mui/material";
import {Button} from "@mui/material";
import {useForm} from "react-hook-form";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import {useUpdateCountryMutation} from "../../../store/slices/CountriesSlice";
import {toast} from "react-toastify";
import {style} from "../../modal_style";
export const EditCountry = ({itemId}) => {

    const [updateCountry, result]=useUpdateCountryMutation();
    const { register, handleSubmit } = useForm();


    const onSubmit = (value) =>{
             updateCountry({
                 "country_name":value.country,
                 "country_id":itemId
            }).unwrap().then(response=>{
                 toast.success('Успешно',{
                     position: "bottom-left",
                     autoClose: 3000,
                     hideProgressBar: false,
                     closeOnClick: true,
                     pauseOnHover: true,
                     draggable: true,
                     progress: undefined,
                     theme: "light",
                 })

             }).catch(error=>{
                 toast.error(`${error.data.detail}`,{
                     position: "bottom-left",
                     autoClose: 3000,
                     hideProgressBar: false,
                     closeOnClick: true,
                     pauseOnHover: true,
                     draggable: true,
                     progress: undefined,
                     theme: "colored",
                 })
             })
        }



    return (
        <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            sx={style}
            noValidate
            autoComplete="off"
        >
            <TextField
                {...register("country",{ required: true, minLength: 5 })}
                id="country"
                name="country"
                label="country"
                sx={{margin:"10px",width:"80%"}}
            />

            <Button
                type="submit"
                variant="contained"
                sx={{width:"200px",margin:"5px",padding:"10px"}}
                label="Add"
            >
                Add
            </Button>
        </Box>
    )
}