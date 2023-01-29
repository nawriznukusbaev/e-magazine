import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import * as React from "react";
import TableHead from '@mui/material/TableHead';
export const CountriesTableHeader = ()=>{
    return (<TableHead>
    <TableRow>
        <TableCell>#</TableCell>
        <TableCell align="left"><p className="font-bold">Name</p></TableCell>
        <TableCell align="left"><p className="font-bold"></p></TableCell>
        <TableCell align="left"><p className="font-bold">Actions</p></TableCell>


    </TableRow>
</TableHead>);
}