import {HeaderBanner} from "./header-banner";
import {HeaderMainMenu} from "./header-main-menu";
import {HeaderTopMenu} from "./header-top-menu";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {Link} from "react-router-dom";
import PersonPinIcon from '@mui/icons-material/PersonPin';
import {HeaderTop} from "./header-top";
import React from "react";
import {useSelector} from "react-redux";
import {getCookie, getJwtToken} from "../../utils";

export const Header = () => {
    let children ='';
    var token=0;
    if(getCookie('token')!==undefined){
        token=getJwtToken('token');
    }
    if (getCookie('token') === undefined) {
        children = (<Link to={'/login'}>
                        <div className="flex flex-row items-center p-[15px]">
                            <PersonPinIcon style={{color: "white",marginRight:"10px"}}/>
                            <p className="text-white text-[18px] leading-4 font-extrabold">Войти</p>
                            <ExpandMoreIcon style={{color: "white"}}/>
                        </div>
                </Link>);
    } else if (token.is_admin===0) {
        children = (<Link to={'/userpage'}>
                        <div className="flex flex-row items-center p-[15px]">
                            <PersonPinIcon style={{color: "white",marginRight:"10px"}}/>
                            <p className="text-white text-[18px] leading-4 font-extrabold">{token.sub}</p>
                            <ExpandMoreIcon style={{color: "white"}}/>
                        </div>
                   </Link>);
    } else {
        children = (<Link to={'/admin'}>
                        <div className="flex flex-row items-center p-[15px]">
                            <PersonPinIcon style={{color: "white",marginRight:"10px"}}/>
                            <p className="text-white text-[18px] leading-4 font-extrabold">{token.sub}</p>
                            <ExpandMoreIcon style={{color: "white"}}/>
                        </div>
                   </Link>);
    }

        return (<div id="header">
            <HeaderTop/>
            <HeaderTopMenu/>
            <HeaderMainMenu children={children}/>

        </div>)
}