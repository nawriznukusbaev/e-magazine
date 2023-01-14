import './App.css';
import reportWebVitals from './reportWebVitals';
import React, {useEffect} from 'react';
import {Route, Routes, Link,} from "react-router-dom";


function App() {
       return (
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/posts" element={<Posts/>}/>
                <Route path="/comments" element={<Comments/>}/>
            </Routes>
    );
}
export default App;
