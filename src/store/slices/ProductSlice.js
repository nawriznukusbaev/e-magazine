import {createSlice} from '@reduxjs/toolkit';
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const initialState = {
    value: 0,
}

export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://ecommerce-h6sh.onrender.com/'}),
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => `products`
        }),
        getSingleProduct: builder.query({
            query:  (id) => `products/${id}`
        })
    })

});

export const {useGetProductsQuery,useGetSingleProductQuery} = productsApi;