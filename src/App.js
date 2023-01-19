import './App.css';
import React from 'react';
import {Routes, Route} from "react-router-dom";
import Layout from "./pages/layout";
import Homepage from "./pages/homepage";
import NotFound from "./pages/404";
import {AddCategory} from "./components/admin/categories/addCategory";
import LoginForm from "./components/loginForm";
import Cart from "./components/cart";
import {RequireAuth} from "./hoc/RequireAuth";
import {AuthProvider} from "./hoc/AuthProvider";
import {Provider, useSelector} from "react-redux";
import state from './store/slices/store';
import {Product} from "./components/product/product";
import AdminLayout from "./components/admin";

const App = () => {
    return (<Provider store={state}>
        <AuthProvider>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route index element={<Homepage/>}/>
                        <Route path="cart" element={<Cart/>}/>
                        <Route path="/products/:id" element={<Product/>}/>
                        <Route path='*' element={<NotFound/>}/>

                    </Route>
                    {/*<Route path="/admin" element={
                        <RequireAuth>
                            <Admin/>
                        </RequireAuth>
                    }/>*/}
                    <Route path="admin" element={<AdminLayout/>}>
                        <Route path="products" element={<Cart/>}/>
                        <Route path="products/add" element={<Cart/>}/>
                        <Route path="orders" element={<Cart/>}/>
                        <Route path="orders/add" element={<Cart/>}/>
                        <Route path="users" element={<Cart/>}/>
                        <Route path="users/add" element={<Cart/>}/>
                        <Route path="categories" element={<Cart/>}/>
                        <Route path="categories/add" element={<AddCategory/>}/>
                        <Route path="countries" element={<Cart/>}/>
                        <Route path="countries/add" element={<Cart/>}/>


                    </Route>
                    <Route path="/login" element={<LoginForm/>}/>
                </Routes>
        </AuthProvider>
        </Provider>
    );
};

export default App
