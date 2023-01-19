import TextField from "@mui/material/TextField";
import {Box} from "@mui/material";
import {Button} from "@mui/material";
import {useForm} from "react-hook-form";
import {useAddCategoryMutation} from "../../../store/slices/CategorySlice";
export const AddCategory = () => {
    const [addCategory, result]=useAddCategoryMutation();
    let defaultData={
        name:'',
        parent_category_id:null,
    }
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) =>{
        defaultData.name=data.category;
        console.log(data);
       if(defaultData.name!==''){
           console.log(defaultData);
           addCategory(defaultData);
       }

    }

    return (<div className="flex flex-row w-[100%]">
        <div className="flex flex-col justify-center items-center w-[50%] mt-[50px]">
            <Box
                component="form"
                onSubmit={handleSubmit(onSubmit)}
                sx={{display:'flex', flexDirection:'column','& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField
                    {...register("category",{ required: true, minLength: 5 })}
                    id="category"
                    name="category"
                    label="Category"

                  />
                <Button
                    type="submit"
                    variant="contained"
                    color="inherit"
                    label="Add"
                >
                    Add
                </Button>
            </Box>
        </div>


    </div>)
}