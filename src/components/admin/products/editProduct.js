import TextField from "@mui/material/TextField";
import {Box} from "@mui/material";
import {Button} from "@mui/material";
import {useForm} from "react-hook-form";
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import {useUpdateProductMutation} from "../../../store/slices/ProductSlice";
import {useState} from "react";
import {toast} from "react-toastify";
import {style} from "../../modal_style";

export const EditProduct = ({data,itemId}) => {
    const [updateProduct]=useUpdateProductMutation();
    const { register, handleSubmit } = useForm();
    const [category, setCategory] = useState();
    let defaultData=null;

    const onSubmit = (value) =>{
        defaultData={ "product": {
                "name": value.name,
                "price": +value.price,
                "description": value.description,
                "quantity": +value.quantity,
                "discount": +value.discount,
                "category_id": category
            },
            "product_images": [
                {
                    "image_path": value.image_path
                },
            ]}
        updateProduct({
            product:defaultData,
            product_id:itemId,
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
            <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
                <div style={{display:"flex",flexDirection:"column",marginRight:"20px"}}>
                    <TextField
                        {...register("name",{ required: true, minLength: 5 })}
                        id="name"
                        name="name"
                        label="Name"
                        sx={{margin:"10px",width:"100%"}}
                    />
                    <TextField
                        {...register("price",{ required: true, minLength: 4 })}
                        id="price"
                        name="price"
                        label="Price"
                        sx={{margin:"10px",width:"100%"}}
                    />
                    <TextField
                        {...register("description",{ required: true, minLength: 10 })}
                        id="description"
                        name="description"
                        label="Description"
                        sx={{margin:"10px",width:"100%"}}
                    />
                    <TextField
                        {...register("quantity",{ required: true })}
                        id="quantity"
                        name="quantity"
                        label="Quantity"
                        sx={{margin:"10px",width:"100%"}}
                    />
                </div>
                <div style={{display:"flex",flexDirection:"column"}}>
                    <TextField
                        {...register("discount",{ required: true })}
                        id="discount"
                        name="discount"
                        label="Discount"
                        value={0}
                        sx={{margin:"10px",width:"100%"}}
                    />
                    <TextField
                        {...register("image_path",{ required: true, minLength: 5 })}
                        id="image_path"
                        name="image_path"
                        label="Image link"
                        sx={{margin:"10px",width:"100%"}}
                    />
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        value={category}
                        label="category"
                        sx={{margin:"10px",width:"100%"}}
                        onChange={handleChange}
                    >
                        {data.data?.map((item)=>{
                            return  <MenuItem
                                key={item.name}
                                value={item.id}>
                                {item.name}
                            </MenuItem>
                        })}
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                    </Select>
                </div>
            </div>



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