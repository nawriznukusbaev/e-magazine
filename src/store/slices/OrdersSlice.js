import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {getCookie} from "../../utils";

export const ordersApi = createApi({
    reducerPath: 'ordersApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://ecommerce.icedev.uz/',
        prepareHeaders: (headers)=>{

            if(!!getCookie('token')){
                console.log(getCookie('token'));
                return headers.set(
                    'authorization',`bearer ${getCookie('token')}`
                );
            }
        },
    }),

    endpoints: (builder) => ({
        getUserOrders: builder.query({
            query: (user_id) => `orders/${user_id}`

        }),
        getSingleOrder: builder.query({
            query: (id) => `orders/${id}`
        }),
        getLimitOrder: builder.query({
            query: (limit) => `orders?limit=${limit}&offset=${limit}`
        }),
        addOrder: builder.mutation({
            query: (order) =>{

                return {
                    url: `orders`,
                    method: 'POST',
                    headers: {
                        'Content-type':'application/json'
                    },
                    body: (order)
                }

            },
        }),
        updateOrder: builder.mutation({
            query({user,user_id}) {

                return {
                    url: `orders/${user_id}`,
                    method: 'PUT',
                    body: (user),
                    headers: {
                        'Content-type':'application/json'
                    }
                }
            }
        }),
        deleteOrder: builder.mutation({
            query(user_id) {

                return {
                    url: `orders/${user_id}`,
                    method: 'DELETE'
                }
            }
        })
    })

});

export const {useGetUserOrdersQuery, useGetSingleOrderQuery,useGetLimitOrderQuery,useAddOrderMutation,useUpdateOrderMutation,useDeleteOrderMutation} = ordersApi;