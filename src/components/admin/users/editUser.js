import TextField from "@mui/material/TextField";
import {Box} from "@mui/material";
import {Button} from "@mui/material";
import {useForm} from "react-hook-form";

import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import {useUpdateUserMutation} from "../../../store/slices/UserSlice";
import {useState} from "react";
import {Switch} from "@mui/material";

import {toast} from "react-toastify";
import {style} from "../../modal_style";


export const EditUser = ({data,itemId}) => {
    console.log(data);
    const [updateUser] = useUpdateUserMutation();
    const {register, handleSubmit} = useForm();
    const [country, setCountry] = useState();
    const [phone_variant, setPhoneVariant] = useState();
    let defaultData=null;

    const onSubmit = (value) => {
        defaultData =
            {
                user: {
                    username: value.username,
                    is_admin: value.isAdmin,
                    password: value.password
                },
                user_detail: {
                    first_name: value.first_name,
                    last_name: value.last_name,
                    user_image: value.image_path
                },
                user_phones: [
                    {
                        phone_number: value.phone_number,
                        type: phone_variant
                    }
                ],
                user_address: {
                    street_address: value.adress,
                    postal_code: value.postal_code,
                    city: value.city,
                    country_id: country
                }

            }
            console.log(defaultData);

        updateUser({
            user:defaultData,
            user_id:itemId
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

    const handleChange = (e) => {

        if (e.target.name === 'phone_variant') {
            setPhoneVariant(e.target.value);
        }
        if (e.target.name === 'country') {
            setCountry(e.target.value);
        }
    }

    return (
        <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            sx={style}
            noValidate
            autoComplete="off"
        >
            <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                <div style={{display: "flex", flexDirection: "column", marginRight: "30px"}}>
                    <div style={{display: "flex", flexDirection: "row", width: "100%", margin: "10px"}}>
                        <TextField
                            {...register("username", {required: true, minLength: 4})}
                            id="username"
                            name="username"
                            label="Username"
                            sx={{marginRight: "10px", width: "50%"}}
                        />
                        <div style={{display: "flex", flexDirection: "row"}}><Switch {...register("isAdmin")} />Admin</div>
                    </div>
                    <TextField
                        {...register("password",  {
                            required: true,
                            minLength: {
                                value: 8,
                                message:'пароль должен содержать не менее 8 символов '
                            },
                            validate: (value) => {
                                if (value.match(/[а-яА-я]/)) {
                                    return 'Пароль не можеть содержать русский буквы'
                                }
                                return true
                            }
                        })}
                        type="password"
                        id="password"
                        name="password"
                        label="Password"
                        sx={{margin: "10px", width: "100%"}}
                    />
                    <TextField
                        {...register("first_name", {required: true})}
                        id="first_name"
                        name="first_name"
                        label="First name"
                        sx={{margin: "10px", width: "100%"}}
                    />
                    <TextField
                        {...register("last_name", {required: true})}
                        id="last_name"
                        name="last_name"
                        label="Last name"
                        sx={{margin: "10px", width: "100%"}}
                    />
                    <TextField
                        {...register("image_path", {required: true})}
                        id="image_path"
                        name="image_path"
                        label="Image link"
                        sx={{margin: "10px", width: "100%"}}
                    />
                </div>
                <div style={{display: "flex", flexDirection: "column"}}>
                    <TextField
                        {...register("adress", {required: true, minLength:5})}
                        id="adress"
                        name="adress"
                        label="Adress"
                        sx={{margin: "10px", width: "100%"}}
                    />
                    <TextField
                        {...register("postal_code", {required: true, minLength:5})}
                        id="postal_code"
                        name="postal_code"
                        label="Postal code"
                        sx={{margin: "10px", width: "100%"}}
                    />
                    <TextField
                        {...register("city", {required: true, minLength: 5})}
                        id="city"
                        name="city"
                        label="City"
                        sx={{margin: "10px", width: "100%"}}
                    />
                    <Select
                        labelId="demo-simple-select-helper-label"
                        name="country"
                        value={country}
                        label="country"
                        sx={{margin: "10px", width: "100%"}}
                        onChange={handleChange}
                    >
                        {data?.map((item) => {
                            return <MenuItem
                                key={item.name}
                                value={item.id}>
                                {item.country_name}
                            </MenuItem>
                        })}
                    </Select>
                    <div style={{display: "flex", flexDirection: "row", width: "100%", margin: "10px"}}>

                        <TextField
                            {...register("phone_number", {required: true, minLength: 9})}
                            id="phone_number"
                            name="phone_number"
                            label="Phone"
                            sx={{marginRight: "10px", width: "50%"}}
                        />
                        <Select
                            labelId="demo-simple-select-helper-label"
                            id="phone_variant"
                            label="type"
                            name="phone_variant"
                            sx={{width: "50%"}}
                            onChange={handleChange}
                        >
                            <MenuItem value={'mobile'}>
                                Mobile
                            </MenuItem>
                            <MenuItem value={'home'}>
                                Home
                            </MenuItem>
                            <MenuItem value={'work'}>
                                Work
                            </MenuItem>
                        </Select>
                    </div>

                </div>
            </div>
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