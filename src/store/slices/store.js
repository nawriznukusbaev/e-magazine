import {configureStore} from '@reduxjs/toolkit';
import {productsApi} from "./ProductSlice";
import authenticationReducer from "./AuthSlice";
export default configureStore({
    reducer: {
        authentication:authenticationReducer,
        [productsApi.reducerPath]: productsApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsApi.middleware)
});

