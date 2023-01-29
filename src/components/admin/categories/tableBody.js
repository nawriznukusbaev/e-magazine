import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import * as React from "react";

export const TabBody = (data)=>{

    return (
        <TableBody>
            {data.data?.map((item,index) => {
                return (<TableRow key={item.id}>
                    <TableCell component="th" scope="row">
                        {index+1}
                    </TableCell>
                    <TableCell align="left">{item.name}</TableCell>
                    <TableCell align="left">{item.parent_category?.name}</TableCell>
                    <TableCell align="left">
                        <EditIcon style={{color:"rgb(25, 118, 210)",marginRight:"5px"}}/>
                        <DeleteForeverIcon style={{color:"rgb(25, 118, 210)"}}/>
                    </TableCell>
                    <TableCell align="left"></TableCell>
                    <TableCell align="left"></TableCell>
                </TableRow>)
            })}
        </TableBody>
    );
}