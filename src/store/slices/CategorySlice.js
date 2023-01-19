import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";


export const categoriesApi = createApi({
    reducerPath: 'categoriesApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://ecommerce-h6sh.onrender.com/'}),
    endpoints: (builder) => ({
        getCategories: builder.query({
            query: () => `categories`
        }),
        getSingleCategory: builder.query({
            query: (id) => `categories/${id}`
        }),
        getLimitCategory: builder.query({
            query: (limit) => `categories?limit=${limit}&offset=${limit}`
        }),
        addCategory: builder.mutation({
            query: (category) => ({
                url: `categories`,
                method: 'POST',
                body: category,
                headers: {
                    'Content-type':'application/json: charset=UTF-8'
                }
            })
        }),
        updateCategory: builder.mutation({
            query(category) {
                const {parent_category_id} = category;
                return {
                    url: `categories/${parent_category_id}`,
                    method: 'PUT',
                    body: (category),
                    headers: {
                        'Content-type':'application/json: charset=UTF-8'
                    }
                }
            }
        }),
        deleteCategory: builder.mutation({
            query(category) {
                const {id} = category
                return {
                    url: `categories/${id}`,
                    method: 'DELETE'
                }
            }
        })
    })

});

export const {useGetCategoriesQuery, useGetSingleCategoryQuery,useGetLimitCategoryQuery,useAddCategoryMutation,useUpdateCategoryQuery,useDeleteCategoryQuery} = categoriesApi;