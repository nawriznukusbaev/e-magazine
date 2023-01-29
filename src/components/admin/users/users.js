import * as React from 'react';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';

import Button from '@mui/material/Button';

import Modal from '@mui/material/Modal';
import {useGetUsersQuery} from "../../../store/slices/UserSlice";
import {UsersTableHeader} from "./tableHead";
import {UsersTableBody} from "./tableBody";

export default function Users() {
    const {data,result} = useGetUsersQuery();
    console.log(result);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <div className="container-xl mt-[30px]">
                <Button onClick={handleOpen} variant="contained" sx={{marginBottom:"20px"}}>Add user</Button>
             {/*   <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <AddCountry/>
                </Modal>*/}
                <TableContainer component={Paper}>
                    <Table sx={{minWidth: 650}} aria-label="simple table">
                        <UsersTableHeader/>
                        { data && <UsersTableBody data={data}/> }
                    </Table>
                </TableContainer>
            </div>
        </>
    )
}
