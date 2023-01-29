import * as React from 'react';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import {useGetProductsQuery} from "../../../store/slices/ProductSlice";
import Button from '@mui/material/Button';

import Modal from '@mui/material/Modal';
import {AddProduct} from "./addProduct";
import {ProductsTableHeader} from "./tableHead";
import {ProductsTableBody} from "./tableBody";

export default function Products() {
    const {data,result} = useGetProductsQuery();
    console.log(result);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <div className="container-xl mt-[30px]">
                <Button onClick={handleOpen}>Open modal</Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <AddProduct/>
                </Modal>
                <TableContainer component={Paper}>
                    <Table sx={{minWidth: 650}} aria-label="simple table">
                        <ProductsTableHeader/>
                        { data && <ProductsTableBody data={data}/> }
                    </Table>
                </TableContainer>
            </div>
        </>
    )
}
