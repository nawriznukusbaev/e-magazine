import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import * as React from "react";
import Modal from "@mui/material/Modal";
import {OrderProducts} from "./orderProducts";
import {toast} from "react-toastify";
import {Button} from "@mui/material";
import {useGetSingleCountryQuery} from "../../../store/slices/CountriesSlice";

export const OrdersTableBody = ({orders, index}) => {
    const {
        order_status,
        order_details,
        order_date,
        address_id,
        user_id,
        order_status_id,
        id,
    } = orders
    console.log(address_id);
    const {data: country} = useGetSingleCountryQuery(address_id);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <TableBody>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <OrderProducts data={orders}/>
            </Modal>

            <TableRow>
                <TableCell component="th" scope="row">
                    {index + 1}
                </TableCell>
                <TableCell align="left">
                    <Button onClick={() => {
                        handleOpen()
                    }}>Просмотреть</Button>
                </TableCell>
                <TableCell align="left">{order_date}</TableCell>
                <TableCell align="left">{order_status.status}</TableCell>
                <TableCell align="left">{country?.country_name}</TableCell>


            </TableRow>

        </TableBody>
    );
}