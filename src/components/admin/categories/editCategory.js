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
import {useUpdateCategoryMutation} from "../../../store/slices/CategorySlice";
import {useState} from "react";
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import {style} from "../../modal_style";

export const EditCategory = ({data,itemId}) => {
    console.log(data,itemId);
    const [updateCategory, result]=useUpdateCategoryMutation();
    const { register, handleSubmit } = useForm();
    const [category, setCategory] = useState();
    let defaultData={
        name:'',
        parent_category_id:category!==undefined?category:null
    }

    const onSubmit = (value) =>{
        defaultData.name=value.category;
        if(defaultData.name!==''){
                  updateCategory({
                category_id:itemId,
                category:defaultData
            }).unwrap().then(response=>{
                      toast.success('Успешно изменен',{
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

    const handleChange = (e) =>{
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
                {...register("category",{ required: true, minLength: 5 })}
                id="category"
                name="category"
                label="Category"
                sx={{margin:"10px",width:"80%"}}
            />
            <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={category}
                label="category"
                sx={{margin:"10px",width:"80%"}}
                onChange={handleChange}
            >
                {data.data?.map((item)=>{
                    return  <MenuItem
                        key={item.name}
                        value={item.id}>
                        {item.name}
                    </MenuItem>
                })}
            </Select>
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