import {HeaderBanner} from "./header-banner";
import {HeaderMainMenu} from "./header-main-menu";
import {HeaderTopMenu} from "./header-top-menu";

import {HeaderTop} from "./header-top";
import React from "react";

export const Header=()=>{
    return (<div id="header">
        <HeaderTop/>
        <HeaderTopMenu/>
        <HeaderMainMenu/>

    </div>)
}