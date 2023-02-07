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


const style = {
    display:'flex',
    flexDirection:'column',
    alignItems:"center",
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export const EditCountry = ({itemId}) => {

    const [updateCountry, result]=useUpdateCountryMutation();
    const { register, handleSubmit } = useForm();


    const onSubmit = (value) =>{
             updateCountry({
                 "country_name":value.country,
                 "country_id":itemId
            });
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