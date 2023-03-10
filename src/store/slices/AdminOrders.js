import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {getCookie} from "../../utils";

export const adminOrdersApi = createApi({
    reducerPath: 'adminOrdersApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://ecommerce.icedev.uz/',
        prepareHeaders: (headers)=>{
            if(!!getCookie('token')){
                return headers.set(
                    'authorization',`bearer ${getCookie('token')}`
                );
            }
        },
    }),

    endpoints: (builder) => ({
        getOrders: builder.query({
            query: () => `orders`

        })
    })

});

export const {useGetOrdersQuery} = adminOrdersApi;