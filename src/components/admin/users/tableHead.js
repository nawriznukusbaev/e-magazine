import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import * as React from "react";
import TableHead from '@mui/material/TableHead';
export const UsersTableHeader = ()=>{
    return (<TableHead>
    <TableRow>
        <TableCell>#</TableCell>
        <TableCell align="left"><p className="font-bold">Image</p></TableCell>
        <TableCell align="left"><p className="font-bold">Name</p></TableCell>
        <TableCell align="left"><p className="font-bold">Role</p></TableCell>
        <TableCell align="left"><p className="font-bold">Actions</p></TableCell>


    </TableRow>
</TableHead>);
}