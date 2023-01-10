import './App.css';
import React from 'react';
import {Routes, Route} from "react-router-dom";
import Layout from "./pages/layout";
import Homepage from "./pages/homepage";
import NotFound from "./pages/404";
import Admin from "./pages/admin";
import LoginForm from "./components/loginForm";
import Cart from "./components/cart";
import {RequireAuth} from "./hoc/RequireAuth";
import {AuthProvider} from "./hoc/AuthProvider";
import {Provider, useSelector} from "react-redux";
import state from './store/slices/store';

const App = () => {
    return (<Provider store={state}>
        <AuthProvider>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route index element={<Homepage/>}/>
                        <Route path="cart" element={<Cart/>}/>
                        <Route path='*' element={<NotFound/>}/>
                    </Route>
                    <Route path="/admin" element={
                        <RequireAuth>
                            <Admin/>
                        </RequireAuth>
                    }/>
                    <Route path="/login" element={<LoginForm/>}/>
                </Routes>
        </AuthProvider>
        </Provider>
    );
};

export default App
