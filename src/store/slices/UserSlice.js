import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";


export const usersApi = createApi({
    reducerPath: 'usersApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://ecommerce-h6sh.onrender.com/'}),
    endpoints: (builder) => ({
        getUsers: builder.query({
            query: () => `users`
        }),
        getSingleUser: builder.query({
            query: (id) => `users/${id}`
        }),
        getLimitUser: builder.query({
            query: (limit) => `users?limit=${limit}&offset=${limit}`
        }),
        addUser: builder.mutation({
            query: (user) => ({
                url: `users`,
                method: 'POST',
                headers: {
                    'Content-type':'application/json'
                },
                body: (user),
            }),
        }),
        updateUser: builder.mutation({
            query(user) {
                const {user_id} = user;
                return {
                    url: `users/${user_id}`,
                    method: 'PUT',
                    body: (user),
                    headers: {
                        'Content-type':'application/json: charset=UTF-8'
                    }
                }
            }
        }),
        deleteUser: builder.mutation({
            query(user) {
                const {id} = user
                return {
                    url: `users/${id}`,
                    method: 'DELETE'
                }
            }
        })
    })

});

export const {useGetUsersQuery, useGetSingleUserQuery,useGetLimitUserQuery,useAddUserMutation,useUpdateUserQuery,useDeleteUserQuery} = usersApi;