import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import * as React from "react";
import Avatar from '@mui/material/Avatar';
import {useDeleteUserMutation} from "../../../store/slices/UserSlice";
import Modal from "@mui/material/Modal";
import {EditUser} from "./editUser";
import {useGetCountriesQuery} from "../../../store/slices/CountriesSlice";
import {toast} from "react-toastify";

export const UsersTableBody = ({data}) => {
    const [deleteUser] = useDeleteUserMutation();
    const {data:country} = useGetCountriesQuery()
    const [open, setOpen] = React.useState(false);
    const [itemId, setItemId] = React.useState(0);
    const handleOpen = (item) => {
        setOpen(true);
        setItemId(item)
    };
    const handleClose = () => setOpen(false);
    return (
        <TableBody>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <EditUser data={country} itemId={itemId}/>
            </Modal>
            {data?.map((item, index) => {
                return (<TableRow key={item.id}>
                    <TableCell component="th" scope="row">
                        {index + 1}
                    </TableCell>
                    <TableCell align="left">
                        <Avatar
                            alt="Remy Sharp"
                            src={item.user_detail.user_image}
                            sx={{width: 56, height: 56}}
                        />
                    </TableCell>
                    <TableCell align="left">{item.user_detail.first_name} {item.user_detail.last_name}</TableCell>
                    <TableCell align="left">{item.is_admin ? "admin" : "user"}</TableCell>
                    <TableCell align="left">
                        <EditIcon onClick={() => {
                            handleOpen(item.id)
                        }} style={{color: "rgb(25, 118, 210)", marginRight: "5px"}}/>
                        <DeleteForeverIcon onClick={() => {
                            deleteUser(item.id).unwrap().then(response=>{
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
                        }} style={{color: "rgb(25, 118, 210)"}}/>
                    </TableCell>

                </TableRow>)
            })}
        </TableBody>
    );
}