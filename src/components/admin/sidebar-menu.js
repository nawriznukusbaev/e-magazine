import * as React from 'react';
import {Link} from "react-router-dom";
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import CategoryIcon from '@mui/icons-material/Category';
import DehazeIcon from '@mui/icons-material/Dehaze';
import LanguageIcon from '@mui/icons-material/Language';
import PersonIcon from '@mui/icons-material/Person';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import {Collapse} from "@mui/material";
import {ExpandLess,ExpandMore} from "@mui/icons-material";
import {ListItemButton} from "@mui/material";
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const style = {
    width: '100%',
    maxWidth: 360,

};

export const SidebarMenu = () => {
    const [openOrders, setOpenOrders] = React.useState(false);
    const [openProducts, setOpenProducts] = React.useState(false);
    const [openCategories, setOpenCategories] = React.useState(false);
    const [openUsers, setOpenUsers] = React.useState(false);
    const [openCountries, setOpenCountries] = React.useState(false);

    const handleClick = (value) => {
        switch (value) {
            case 'categories':
                setOpenCategories(!openCategories);
                break;
            case 'orders':
                setOpenOrders(!openOrders);
                break;
            case 'products':
                setOpenProducts(!openProducts);
                break;
            case 'users':
                setOpenUsers(!openUsers);
                break;
            case 'countries':
                setOpenCountries(!openCountries)
                break;

        }
    };
    return (
        <List sx={style} component="nav" aria-label="mailbox folders">
            <ListItemButton onClick={()=>{handleClick('orders')}} divider>
                <ListItemIcon>
                    <CategoryIcon/>
                </ListItemIcon>
                <ListItemText primary="Orders" />
                {openOrders ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openOrders} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <Link to='orders' style={{display:"flex",flexDirection:"row", alignItems:"center"}}>
                    <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>
                                <FormatListNumberedIcon/>
                            </ListItemIcon>
                            <ListItemText primary="List"/>
                    </ListItemButton>
                    </Link>
                    <Link to='orders/add' style={{display:"flex",flexDirection:"row", alignItems:"center"}}>
                    <ListItemButton sx={{ pl: 4 }}>

                            <ListItemIcon>
                                <AddCircleIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Add"/>
                    </ListItemButton>
                    </Link>
                </List>
            </Collapse>
            <ListItemButton onClick={()=>{handleClick('categories')}}  divider>
                <ListItemIcon>
                    <DehazeIcon/>
                </ListItemIcon>
                <ListItemText id="categories"  primary="Categories" />
                {openCategories ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openCategories} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <Link to='categories' style={{display:"flex",flexDirection:"row", alignItems:"center"}}>
                    <ListItemButton sx={{pl: 4}}>
                            <ListItemIcon>
                                <FormatListNumberedIcon/>
                            </ListItemIcon>
                            <ListItemText primary="List"/>
                    </ListItemButton>
                    </Link>
                    <Link to='categories/add' style={{display:"flex",flexDirection:"row", alignItems:"center"}}>
                    <ListItemButton sx={{pl: 4}}>
                            <ListItemIcon>
                                <AddCircleIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Add"/>
                    </ListItemButton>
                    </Link>
                </List>
            </Collapse>
            <ListItemButton onClick={()=>{handleClick('products')}} divider>
                <ListItemIcon>
                    <ProductionQuantityLimitsIcon/>
                </ListItemIcon>
                <ListItemText primary="Products" />
                {openProducts ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openProducts} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <Link to='products' style={{display:"flex",flexDirection:"row", alignItems:"center"}}>
                    <ListItemButton sx={{pl: 4}}>
                            <ListItemIcon>
                                <FormatListNumberedIcon/>
                            </ListItemIcon>
                            <ListItemText primary="List"/>
                    </ListItemButton>
                    </Link>
                    <Link to='products/add' style={{display:"flex",flexDirection:"row", alignItems:"center"}}>
                    <ListItemButton sx={{pl: 4}}>
                            <ListItemIcon>
                                <AddCircleIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Add"/>
                    </ListItemButton>
                    </Link>
                </List>
            </Collapse>
            <ListItemButton onClick={()=>{handleClick('countries')}} divider>
                <ListItemIcon>
                    <LanguageIcon/>
                </ListItemIcon>
                <ListItemText primary="Countries" />
                {openCountries ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openCountries} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <Link to='countries' style={{display:"flex",flexDirection:"row", alignItems:"center"}}>
                    <ListItemButton sx={{pl: 4}}>
                            <ListItemIcon>
                                <FormatListNumberedIcon/>
                            </ListItemIcon>
                            <ListItemText primary="List"/>
                    </ListItemButton>
                    </Link>
                    <Link to='countries/add' style={{display:"flex",flexDirection:"row", alignItems:"center"}}>
                    <ListItemButton sx={{pl: 4}}>
                            <ListItemIcon>
                                <AddCircleIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Add"/>
                    </ListItemButton>
                    </Link>
                </List>
            </Collapse>
            <ListItemButton onClick={()=>{handleClick('users')}} divider>
                <ListItemIcon>
                    <PersonIcon/>
                </ListItemIcon>
                <ListItemText primary="Users" />
                {openUsers ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openUsers} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <Link to='users' style={{display:"flex",flexDirection:"row", alignItems:"center"}}>
                    <ListItemButton sx={{pl: 4}}>
                            <ListItemIcon>
                                <FormatListNumberedIcon/>
                            </ListItemIcon>
                            <ListItemText primary="List"/>
                    </ListItemButton>
                    </Link>
                    <Link to='users/add' style={{display:"flex",flexDirection:"row", alignItems:"center"}}>
                    <ListItemButton sx={{pl: 4}}>
                            <ListItemIcon>
                                <AddCircleIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Add"/>
                    </ListItemButton>
                    </Link>
                </List>
            </Collapse>
        </List>
    )
}