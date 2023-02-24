import TextField from "@mui/material/TextField";
import {Box} from "@mui/material";
import {Button} from "@mui/material";
import {useForm} from "react-hook-form";
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import {useAddCategoryMutation, useGetCategoriesQuery} from "../../../store/slices/CategorySlice";
import {useState} from "react";
import 'react-toastify/dist/ReactToastify.css'
import {toast} from "react-toastify";
import {style} from "../../modal_style";


export const AddCategory = () => {
    const [addCategory, result] = useAddCategoryMutation();
    const {data} = useGetCategoriesQuery();
    const {register, handleSubmit} = useForm();
    const [category, setCategory] = useState();
    let defaultData = {
        name: '',
        parent_category_id: category,
    }

    async function onSubmit (value)  {
        defaultData.name = value.category;
        if (defaultData.name !== '') {
            await addCategory(defaultData).unwrap().then(response=>{
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
    }

    const handleChange = (e) => {
        setCategory(e.target.value);
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
                {...register("category", {required: true, minLength: 5})}
                id="category"
                name="category"
                label="Category"
                sx={{margin: "10px", width: "80%"}}
            />
            <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={category}
                label="category"
                sx={{margin: "10px", width: "80%"}}
                onChange={handleChange}
            >
                {data?.map((item) => {
                    return <MenuItem
                        key={item.name}
                        value={item.id}>
                        {item.name}
                    </MenuItem>
                })}
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
            </Select>
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