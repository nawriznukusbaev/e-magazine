import * as React from 'react';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import {OrdersTableHeader} from "./tableHead";
import {OrdersTableBody} from "./tableBody";
import {useGetUsersQuery} from "../../store/slices/UserSlice";
import {useGetCountriesQuery} from "../../store/slices/CountriesSlice";
import jwtDecode from "jwt-decode";
import {getCookie} from "../../utils";
import {useGetUserOrdersQuery} from "../../store/slices/OrdersSlice";

export default function Orders({users}) {
    const user=jwtDecode(getCookie('token')).sub;
/*
    const userData=users.filter(users=>users.username===user);
*/

    const {data:orders}=useGetUserOrdersQuery(8);
    console.log(orders);
    return (
        <>
            <div className="container-xl mt-[30px]">
                <TableContainer component={Paper}>
                    <Table sx={{minWidth: 650}} aria-label="simple table">
                        <OrdersTableHeader/>
                        { orders && <OrdersTableBody orders={orders}/> }
                    </Table>
                </TableContainer>
            </div>
        </>
    )
}
