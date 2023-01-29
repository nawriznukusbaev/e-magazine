import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import * as React from "react";
import TableHead from '@mui/material/TableHead';
export const ProductsTableHeader = ()=>{
    return (<TableHead>
    <TableRow>
        <TableCell>#</TableCell>
        <TableCell align="left"><p className="font-bold">Image</p></TableCell>
        <TableCell align="left"><p className="font-bold">Title</p></TableCell>
        <TableCell align="left"><p className="font-bold">Description</p></TableCell>
        <TableCell align="left"><p className="font-bold">Price</p></TableCell>
        <TableCell align="left"><p className="font-bold">Category</p></TableCell>
        <TableCell align="left"><p className="font-bold">Discount</p></TableCell>
        <TableCell align="left"><p className="font-bold">Count</p></TableCell>
        <TableCell align="left"><p className="font-bold">Actions</p></TableCell>

    </TableRow>
</TableHead>);
}