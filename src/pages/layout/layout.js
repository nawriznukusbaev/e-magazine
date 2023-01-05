import {Header} from "../../components/header";
import {Footer} from "../../components/footer/footer";
import {Outlet} from "react-router-dom";

export const Layout = () => {
    return (
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>

    );
}