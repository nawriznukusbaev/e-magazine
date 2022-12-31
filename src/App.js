import './App.css';
import React from 'react';
import {Footer} from "./components/footer/footer";
import {Header} from "./components/header";
import {Main} from "./components/main";


const App = () => {
    return (<>
            <Header/>
            <Main/>
            <Footer/>
        </>
    );
};

export default  App
