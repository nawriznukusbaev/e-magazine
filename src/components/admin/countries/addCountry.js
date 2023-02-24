import TextField from "@mui/material/TextField";
import {Box} from "@mui/material";
import {Button} from "@mui/material";
import {useForm} from "react-hook-form";
import {useAddCountryMutation} from "../../../store/slices/CountriesSlice";
import {toast} from "react-toastify";
import {style} from "../../modal_style";

export const AddCountry = () => {
    const [addCategory, result] = useAddCountryMutation();
    const {register, handleSubmit} = useForm();
    console.log(result)
    let defaultData = {
        country_name: '',
    }

    const onSubmit = (value) => {
        defaultData.country_name = value.country;
        addCategory(defaultData).unwrap().then(response=>{
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
                {...register("country", {required: true, minLength: 5})}
                id="country"
                name="country"
                label="Country"
                sx={{margin: "10px", width: "80%"}}
            />

            <Button
                type="submit"
                variant="contained"
                sx={{width: "200px", margin: "5px", padding: "10px"}}
                label="Add"
            >
                Add
            </Button>
        </Box>
    )
}