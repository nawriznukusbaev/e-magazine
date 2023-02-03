import * as React from 'react';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import {useGetCategoriesQuery,} from "../../../store/slices/CategorySlice";
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import {AddCategory} from "./addCategory";
import {TableHeader} from "./tableHead";
import {TabBody} from "./tableBody";
import {useGetCountriesQuery} from "../../../store/slices/CountriesSlice";

export default function Categories() {
    const {data} = useGetCategoriesQuery();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    console.log(data);
    return (
        <>
            <div className="container-xl mt-[30px]">
                <Button onClick={handleOpen} variant="contained" sx={{marginBottom:"20px"}}>Add category</Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <AddCategory/>
                </Modal>
                <TableContainer component={Paper}>
                    <Table sx={{minWidth: 650}} aria-label="simple table">
                        <TableHeader/>
                        <TabBody data={data}/>
                    </Table>
                </TableContainer>
            </div>
        </>
    )
}
