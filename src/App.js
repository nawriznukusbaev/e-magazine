import './App.css';
import React from 'react';
import {Routes, Route} from "react-router-dom";
import Layout from "./pages/layout";
import Homepage from "./pages/homepage";
import NotFound from "./pages/404";
const App = () => {
    return (<>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Homepage/>}/>
                    <Route path='*' element={<NotFound/>}/>
                </Route>

            </Routes>
        </>
    );
};

export default App
