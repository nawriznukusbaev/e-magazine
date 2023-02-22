import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import * as React from "react";
import {useDeleteCategoryMutation} from "../../../store/slices/CategorySlice";
import Modal from "@mui/material/Modal";
import {EditCategory} from "./editCategory";
import {toast} from "react-toastify";

export const TabBody = (data)=>{
    const [deleteCategory]=useDeleteCategoryMutation();
    const [open, setOpen] = React.useState(false);
    const [itemId,setItemId]= React.useState(0);
    const handleOpen = (item) => {
        setOpen(true);
        setItemId(item)
    } ;
    const handleClose = () => setOpen(false);
    return (
        <TableBody>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <EditCategory data={data} itemId={itemId}/>
            </Modal>
            {data.data?.map((item,index) => {
                return (<TableRow key={item.id}>
                    <TableCell component="th" scope="row">
                        {index+1}

                    </TableCell>
                    <TableCell align="left">{item.name}</TableCell>
                    <TableCell align="left">{item.parent_category?.name}</TableCell>
                    <TableCell align="left">

                        <EditIcon  onClick={()=>{handleOpen(item.id)}} style={{color:"rgb(25, 118, 210)",marginRight:"5px"}}/>
                        <DeleteForeverIcon onClick={()=>{deleteCategory(item.id).unwrap().then(response=>{
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

                        }} style={{color:"rgb(25, 118, 210)"}}/>
                    </TableCell>
                    <TableCell align="left"></TableCell>
                    <TableCell align="left"></TableCell>
                </TableRow>)
            })}
        </TableBody>
    );
}