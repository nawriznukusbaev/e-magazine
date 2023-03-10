import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import * as React from "react";
import TableHead from '@mui/material/TableHead';
export const OrdersTableHeader = ()=>{
    return (<TableHead>
    <TableRow>
        <TableCell>#</TableCell>
        <TableCell align="left"><p className="font-bold">Products</p></TableCell>
        <TableCell align="left"><p className="font-bold">Date</p></TableCell>
        <TableCell align="left"><p className="font-bold">Status</p></TableCell>
        <TableCell align="left"><p className="font-bold">Adresses</p></TableCell>
    </TableRow>
</TableHead>);
}