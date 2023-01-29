import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import * as React from "react";
import Avatar from '@mui/material/Avatar';
export const ProductsTableBody = ({data})=>{
        console.log(data);
    return (
        <TableBody>
            {data?.map((item,index) => {
                return (<TableRow key={item.id}>
                    <TableCell component="th" scope="row">
                        {index+1}
                    </TableCell>
                    <TableCell align="left">
                        <Avatar
                        alt="Remy Sharp"
                        src={item.images[0].image_path}
                        sx={{ width: 56, height: 56 }}
                        />
                    </TableCell>
                    <TableCell align="left">{item.name}</TableCell>
                    <TableCell align="left">{item.description}</TableCell>
                    <TableCell align="left">{item.price}</TableCell>
                    <TableCell align="left">{item.category.name}</TableCell>
                    <TableCell align="left">{item.discount}</TableCell>
                    <TableCell align="left">{item.quantity}</TableCell>
                    <TableCell align="left">
                        <EditIcon style={{color:"rgb(25, 118, 210)",marginRight:"5px"}}/>
                        <DeleteForeverIcon style={{color:"rgb(25, 118, 210)"}}/>
                    </TableCell>

                </TableRow>)
            })}
        </TableBody>
    );
}