import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";


export const callOrdersApi = createApi({
    reducerPath: 'callOrdersApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://ecommerce.icedev.uz/'}),
    endpoints: (builder) => ({
        getCallOrders: builder.query({
            query: () => `call_orders`
        }),
        getSingleCallOrder: builder.query({
            query: (id) => `call_orders/${id}`
        }),
        getLimitCallOrder: builder.query({
            query: (limit) => `call_orders?limit=${limit}&offset=${limit}`
        }),
        addCallOrder: builder.mutation({
            query: (call_order) => ({
                url: `call_orders`,
                method: 'POST',
                headers: {
                    'Content-type':'application/json'
                },
                body: (call_order)
            }),
        }),
        updateCallOrder: builder.mutation({
            query({call_order,call_order_id}) {

                return {
                    url: `call_orders/${call_order_id}`,
                    method: 'PUT',
                    body: (call_order),
                    headers: {
                        'Content-type':'application/json'
                    }
                }
            }
        }),
        deleteCallOrder: builder.mutation({
            query(call_order_id) {
                return {
                    url: `call_orders/${call_order_id}`,
                    method: 'DELETE'
                }
            }
        })
    })

});

export const {useGetCallOrdersQuery, useGetSingleCallOrderQuery,useGetLimitCallOrderQuery,useAddCallOrderMutation,useUpdateCallOrderMutation,useDeleteCallOrderMutation} = callOrdersApi;