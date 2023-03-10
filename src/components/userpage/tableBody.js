import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import * as React from "react";
import Modal from "@mui/material/Modal";
import {OrderProducts} from "./orderProducts";
import {toast} from "react-toastify";
import {Button} from "@mui/material";
import {useGetSingleCountryQuery} from "../../store/slices/CountriesSlice";

export const OrdersTableBody = ({orders}) => {
    const {data:country}=useGetSingleCountryQuery(orders.address_id);

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
                <OrderProducts data={orders} itemId={itemId}/>
            </Modal>
            {orders?.map((item, index) => {
                return (<TableRow key={item.id}>
                    <TableCell component="th" scope="row">
                        {index + 1}
                    </TableCell>
                    <TableCell align="left">
                        <Button onClick={() => {
                        handleOpen(item.id)
                    }}>Просмотреть</Button>
                    </TableCell>
                    <TableCell align="left">{orders.order_date}</TableCell>
                    <TableCell align="left">{orders.order_status.status}</TableCell>
                    <TableCell align="left">{country}</TableCell>


                </TableRow>)
            })}
        </TableBody>
    );
}