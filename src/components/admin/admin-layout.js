import {SidebarMenu} from "./sidebar-menu";
import {Outlet} from "react-router-dom";
import HeaderUserPage from "../userpage/header";

export const AdminLayout= () =>{

    return (
        <div className="w-full flex flex-row">
            <div className="flex flex-col w-[20%] h-[100vh] border-r border-inherit bg-[#03a9f4]">
                <SidebarMenu/>
            </div>
            <div className="flex flex-col w-[80%] h-[100vh]">
                <HeaderUserPage/>
                <Outlet/>
            </div>
        </div>
    )
}