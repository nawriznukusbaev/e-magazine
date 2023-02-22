
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import App from "./App";
import store from "./store/slices/store";


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Provider store={store}>
        <ToastContainer />
        <BrowserRouter>
        <App/>
        </BrowserRouter>
    </Provider>
);

reportWebVitals();
