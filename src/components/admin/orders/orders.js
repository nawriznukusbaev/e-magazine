import * as React from 'react';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import {OrdersTableHeader} from "./tableHead";
import {OrdersTableBody} from "./tableBody";


import {useGetOrdersQuery} from "../../../store/slices/AdminOrders";

export default function Orders() {
    const {data: orders} = useGetOrdersQuery();

    return (
        <>
            <div className="container-xl mt-[30px]">
                <TableContainer component={Paper}>
                    <Table sx={{minWidth: 650}} aria-label="simple table">
                        <OrdersTableHeader/>

                        {orders?.map((item,index) => {
                            return <OrdersTableBody key={item} orders={item} index={index}/>
                        })}

                    </Table>
                </TableContainer>
            </div>
        </>
    )
}
