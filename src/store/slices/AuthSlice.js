import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://ecommerce.icedev.uz/'}),
    endpoints: (builder) => ({
        signIn: builder.mutation({
            query(data) {
                const body = encodeURIComponent('username') + '=' + encodeURIComponent(data.username)
                    + '&&' +
                    encodeURIComponent('password') + '=' + encodeURIComponent(data.password)
                return {
                    url: 'token',
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/x-www-form-urlencoded;charset=UTF-8'
                    },
                    body
                }
            }
        })
    })
})

export const {useSignInMutation} = authApi;