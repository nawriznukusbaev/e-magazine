import {configureStore} from '@reduxjs/toolkit';
import {productsApi} from "./ProductSlice";
import {categoriesApi} from "./CategorySlice";
import {countriesApi} from "./CountriesSlice";
import {usersApi} from "./UserSlice";
import {authApi} from "./AuthSlice";
import loginSlice from "./LoginSlice";
import cartReducer from "./CartSlice";
const store = configureStore({
    reducer: {
        login:loginSlice,
        cart:cartReducer,
        [productsApi.reducerPath]: productsApi.reducer,
        [categoriesApi.reducerPath]: categoriesApi.reducer,
        [countriesApi.reducerPath]: countriesApi.reducer,
        [usersApi.reducerPath]: usersApi.reducer,
        [authApi.reducerPath]: authApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
        productsApi.middleware,
        categoriesApi.middleware,
        countriesApi.middleware,
        usersApi.middleware,
        authApi.middleware,
        )
});

export default store;
