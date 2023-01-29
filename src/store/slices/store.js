import {configureStore} from '@reduxjs/toolkit';
import {productsApi} from "./ProductSlice";
import {categoriesApi} from "./CategorySlice";
import {countriesApi} from "./CountriesSlice";
import {usersApi} from "./UserSlice";
import authenticationReducer from "./AuthSlice";
import cartReducer from "./CartSlice";
export default configureStore({
    reducer: {
        authentication: authenticationReducer,
        cart:cartReducer,
        [productsApi.reducerPath]: productsApi.reducer,
        [categoriesApi.reducerPath]: categoriesApi.reducer,
        [countriesApi.reducerPath]: countriesApi.reducer,
        [usersApi.reducerPath]: usersApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
        productsApi.middleware,
        categoriesApi.middleware,
        countriesApi.middleware,
        usersApi.middleware,
        )
});


