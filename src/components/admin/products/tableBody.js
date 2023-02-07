import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import * as React from "react";
import Avatar from '@mui/material/Avatar';
import {useDeleteProductMutation} from "../../../store/slices/ProductSlice";

import Modal from "@mui/material/Modal";
import {EditProduct} from "./editProduct";
import {useGetCategoriesQuery} from "../../../store/slices/CategorySlice";
export const ProductsTableBody = ({data}) => {
    const [deleteProduct] = useDeleteProductMutation();
    const {data:category} = useGetCategoriesQuery();
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
                <EditProduct data={category} itemId={itemId}/>
            </Modal>
            {data?.map((item, index) => {
                return (<TableRow key={item.id}>
                    <TableCell component="th" scope="row">
                        {index + 1}
                    </TableCell>
                    <TableCell align="left">
                        <Avatar
                            alt="Remy Sharp"
                            src={item.images[0].image_path}
                            sx={{width: 56, height: 56}}
                        />
                    </TableCell>
                    <TableCell align="left">{item.name}</TableCell>
                    <TableCell align="left">{item.description}</TableCell>
                    <TableCell align="left">{item.price}</TableCell>
                    <TableCell align="left">{item.category.name}</TableCell>
                    <TableCell align="left">{item.discount}</TableCell>
                    <TableCell align="left">{item.quantity}</TableCell>
                    <TableCell align="left">
                        <EditIcon onClick={() => {
                            handleOpen(item.id)
                        }} style={{color: "rgb(25, 118, 210)", marginRight: "5px"}}/>
                        <DeleteForeverIcon onClick={() => {
                            deleteProduct(item.id)
                        }} style={{color: "rgb(25, 118, 210)"}}/>
                    </TableCell>

                </TableRow>)
            })}
        </TableBody>
    );
}