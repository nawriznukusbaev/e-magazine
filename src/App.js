import './App.css';
import React from 'react';
import {Routes, Route,redirect} from "react-router-dom";
import Layout from "./pages/layout";
import Homepage from "./pages/homepage";
import NotFound from "./pages/404";
import {AddCategory} from "./components/admin/categories/addCategory";
import LoginForm from "./components/loginForm";
import Cart from "./components/cart";
import {RequireAuth} from "./hoc/RequireAuth";
import {RequireAdmin} from "./hoc/RequireAdmin";
import {AuthProvider} from "./hoc/AuthProvider";
import {Product} from "./components/product/product";
import AdminLayout from "./components/admin";
import Categories from "./components/admin/categories/categories";
import Products from "./components/admin/products/products";
import Countries from "./components/admin/countries/countries";
import Users from "./components/admin/users/users";
import UserPage from "./components/userpage";
import Orders from "./components/admin/orders/orders";


const App = () => {
    return (
        <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route index element={<Homepage/>}/>
                        <Route path="cart" element={<Cart/>}/>
                        <Route path="/products/:id" element={<Product/>}/>
                        <Route path='*' element={<NotFound/>}/>
                    </Route>
                    <Route path="/userpage" element={
                        <RequireAuth>
                            <UserPage/>
                        </RequireAuth>
                    }/>
                    <Route path='/login' element={<AuthProvider>
                        <LoginForm/>
                    </AuthProvider>}/>

                    <Route path='/admin' element={
                        <RequireAdmin>
                            <AdminLayout/>
                        </RequireAdmin>
                    }/>
                    <Route path='/admin'  element={<AdminLayout/>}>
                        <Route path="products" element={<Products/>}/>
                        <Route path="products/add" element={<Cart/>}/>
                        <Route path="orders" element={<Orders/>}/>
                        <Route path="orders/add" element={<Cart/>}/>
                        <Route path="users" element={<Users/>}/>
                        <Route path="users/add" element={<Cart/>}/>
                        <Route path="categories" element={<Categories/>}/>
                        <Route path="categories/add" element={<AddCategory/>}/>
                        <Route path="countries" element={<Countries/>}/>
                        <Route path="countries/add" element={<Cart/>}/>
                    </Route>
                    </Routes>

    )
}

export default App
