import {useGetUsersQuery} from "../../store/slices/UserSlice";
import {style} from "../modal_style";
import {Box} from "@mui/material";
import jwtDecode from "jwt-decode";
import {getCookie} from "../../utils";
import {Button} from "@mui/material";
import * as React from "react";
import {useGetCountriesQuery} from "../../store/slices/CountriesSlice";
import {EditUser} from "../admin/users/editUser";
import Modal from "@mui/material/Modal";
export const Profile = () => {
    const {data} = useGetUsersQuery();
    const {data:dataCountry} = useGetCountriesQuery();
    const user=jwtDecode(getCookie('token')).sub;
    const userData=data.filter(users=>users.username===user);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);

    };
    const handleClose = () => setOpen(false);

    style.flexDirection='column';
    return (
            <Box

                sx={style}
                noValidate
                autoComplete="off"
            >
                <p className="text-4xl font-bold mb-[15px]">User details</p>
                <div className="flex flex-row mb-[15px]">
                <div className="flex flex-col justify-between">
                    <p className="text-xl font-semibold p-[5px] m-[5px]">Username:</p>
                    <p className="text-xl font-semibold p-[5px] m-[5px]">Role:</p>
                    <p className="text-xl font-semibold p-[5px] m-[5px]">Name:</p>
                    <p className="text-xl font-semibold p-[5px] m-[5px]">Adress:</p>
                    <p className="text-xl font-semibold p-[5px] m-[5px]">Phone:</p>
                </div>
                <div className="flex flex-col justify-between ">
                    <p className="text-xl font-normal p-[5px] m-[5px]">{userData[0].username}</p>
                    <p className="text-xl font-normal p-[5px] m-[5px]">{!userData[0].role?'user':'admin'}</p>
                    <p className="text-xl font-normal p-[5px] m-[5px]">
                        {userData[0].user_detail.first_name+' '+
                            userData[0].user_detail.last_name}</p>
                    <p className="text-xl font-normal p-[5px] m-[5px]">
                        {userData[0].addresses[0].country.country_name+", "
                            +userData[0].addresses[0].city+", "
                            +userData[0].addresses[0].street_address+", postal code:"
                            +userData[0].addresses[0].postal_code
                        }
                    </p>
                    <p className="text-xl font-normal p-[5px] m-[5px]">{userData[0].phone_numbers.map(item=>{
                        return  item.type+': '+item.phone_number
                    })}</p>
                </div>
                   </div>
                <Button variant="contained" onClick={()=>handleOpen()}>
                    <p className="text-xl font-normal px-[5px] m-[5px]">
                        Edit
                    </p>
                </Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <EditUser data={dataCountry} itemId={userData[0].user_detail.id}/>
                </Modal>
            </Box>

    )


}