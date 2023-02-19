import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";


export const usersApi = createApi({
    reducerPath: 'usersApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://ecommerce.icedev.uz/'}),
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
            query: (user) =>{
                const path=user.user.is_admin?'users/admin':'users';
                return {
                    url: path,
                    method: 'POST',
                    headers: {
                        'Content-type':'application/json'
                    },
                    body: (user)
                }

            },
        }),
        updateUser: builder.mutation({
            query({user,user_id}) {

                return {
                    url: `users/${user_id}`,
                    method: 'PUT',
                    body: (user),
                    headers: {
                        'Content-type':'application/json'
                    }
                }
            }
        }),
        deleteUser: builder.mutation({
            query(user_id) {

                return {
                    url: `users/${user_id}`,
                    method: 'DELETE'
                }
            }
        })
    })

});

export const {useGetUsersQuery, useGetSingleUserQuery,useGetLimitUserQuery,useAddUserMutation,useUpdateUserMutation,useDeleteUserMutation} = usersApi;