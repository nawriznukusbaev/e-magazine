import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";


export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://ecommerce.icedev.uz/'}),
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => `products`
        }),
        getSingleProduct: builder.query({
            query: (id) => `products/${id}`
        }),
        getLimitProduct: builder.query({
            query: (limit) => `products?limit=${limit}&offset=${limit}`
        }),
        addProduct: builder.mutation({
            query: (product) => ({
                url: `products`,
                method: 'POST',
                headers: {
                    'Content-type':'application/json'
                },
                body: (product)
            }),
        }),
        updateProduct: builder.mutation({
            query({product,product_id}) {

                return {
                    url: `products/${product_id}`,
                    method: 'PUT',
                    body: (product),
                    headers: {
                        'Content-type':'application/json'
                    }
                }
            }
        }),
        deleteProduct: builder.mutation({
            query(product_id) {
                return {
                    url: `products/${product_id}`,
                    method: 'DELETE'
                }
            }
        })
    })

});

export const {useGetProductsQuery, useGetSingleProductQuery,useGetLimitProductQuery,useAddProductMutation,useUpdateProductMutation,useDeleteProductMutation} = productsApi;