import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import * as React from "react";
import TableHead from '@mui/material/TableHead';
export const TableHeader = ()=>{
    return (<TableHead>
    <TableRow>
        <TableCell>#</TableCell>
        <TableCell align="left"><p className="font-bold">Title</p></TableCell>
        <TableCell align="left">Parrent category</TableCell>
        <TableCell align="left">Actions</TableCell>
        <TableCell align="left"></TableCell>
        <TableCell align="left"></TableCell>

    </TableRow>
</TableHead>);
}