import {configureStore} from '@reduxjs/toolkit';
import {productsApi} from "./ProductSlice";
import {categoriesApi} from "./CategorySlice";
import {countriesApi} from "./CountriesSlice";
import {usersApi} from "./UserSlice";
import {authApi} from "./AuthSlice";
import {ordersApi} from "./OrdersSlice";
import loginSlice from "./LoginSlice";
import cartReducer from "./CartSlice";
import {adminOrdersApi} from "./AdminOrders";
import {callOrdersApi} from "./callOrders";
const store = configureStore({
    reducer: {
        login:loginSlice,
        cart:cartReducer,
        [callOrdersApi.reducerPath]: callOrdersApi.reducer,
        [adminOrdersApi.reducerPath]: adminOrdersApi.reducer,
        [ordersApi.reducerPath]: ordersApi.reducer,
        [productsApi.reducerPath]: productsApi.reducer,
        [categoriesApi.reducerPath]: categoriesApi.reducer,
        [countriesApi.reducerPath]: countriesApi.reducer,
        [usersApi.reducerPath]: usersApi.reducer,
        [authApi.reducerPath]: authApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
        callOrdersApi.middleware,
        adminOrdersApi.middleware,
        ordersApi.middleware,
        productsApi.middleware,
        categoriesApi.middleware,
        countriesApi.middleware,
        usersApi.middleware,
        authApi.middleware,
        )
});

export default store;
