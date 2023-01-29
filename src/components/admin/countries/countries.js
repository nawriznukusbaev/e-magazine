import * as React from 'react';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import {useGetCountriesQuery} from "../../../store/slices/CountriesSlice";
import {CountriesTableHeader} from "./tableHead";
import {CountriesTableBody} from "./tableBody";

export default function Countries() {
    const {data,isSuccess} = useGetCountriesQuery();
    console.log(isSuccess);
    console.log(data);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

        return (
            <>
                <div className="container-xl mt-[30px]">
                    <Button onClick={handleOpen} variant="contained" sx={{marginBottom:"20px"}}>Add country</Button>
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
                            <CountriesTableHeader/>
                            { data && <CountriesTableBody data={data}/> }
                        </Table>
                    </TableContainer>
                </div>
            </>
        )


}
