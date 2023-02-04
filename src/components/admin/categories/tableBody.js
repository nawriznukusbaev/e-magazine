import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import * as React from "react";
import {useDeleteCategoryMutation} from "../../../store/slices/CategorySlice";
import Modal from "@mui/material/Modal";
import {EditCategory} from "./editCategory";

export const TabBody = (data)=>{
    const [deleteCategory]=useDeleteCategoryMutation();
    const [open, setOpen] = React.useState(false);
    const [categorySelect,setCategorySelect]= React.useState(null);
    const handleOpen = (item) => {
        setOpen(true);
        setCategorySelect(item)
    } ;
    const handleClose = () => setOpen(false);
    return (
        <TableBody>
            {data.data?.map((item,index) => {
                return (<TableRow key={item.id}>
                    <TableCell component="th" scope="row">
                        {index+1}
                        <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <EditCategory data={data} categorySelect={categorySelect}/>
                        </Modal>
                    </TableCell>
                    <TableCell align="left">{item.name}</TableCell>
                    <TableCell align="left">{item.parent_category?.name}</TableCell>
                    <TableCell align="left">
                        <EditIcon  onClick={()=>{handleOpen(item)}} style={{color:"rgb(25, 118, 210)",marginRight:"5px"}}/>
                        <DeleteForeverIcon onClick={()=>{deleteCategory(item.id)}} style={{color:"rgb(25, 118, 210)"}}/>
                    </TableCell>
                    <TableCell align="left"></TableCell>
                    <TableCell align="left"></TableCell>
                </TableRow>)
            })}
        </TableBody>
    );
}