import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";


export const countriesApi = createApi({
    reducerPath: 'countriesApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://ecommerce.icedev.uz/'}),
    endpoints: (builder) => ({
        getCountries: builder.query({
            query: () => `countries`
        }),
        getSingleCountry: builder.query({
            query: (id) => `countries/${id}`
        }),
        getLimitCountry: builder.query({
            query: (limit) => `countries?limit=${limit}&offset=${limit}`
        }),
        addCountry: builder.mutation({
            query: (country) => ({
                url: `countries`,
                method: 'POST',
                headers: {
                    'Content-type':'application/json'
                },
                body: (country),
            }),
        }),
        updateCountry: builder.mutation({
            query({country_name,country_id}) {

                return {
                    url: `countries/${country_id}`,
                    method: 'PUT',
                    body: ({country_name}),
                    headers: {
                        'Content-type':'application/json'
                    }
                }
            }
        }),
        deleteCountry: builder.mutation({
            query(country_id) {

                return {
                    url: `countries/${country_id}`,
                    method: 'DELETE'
                }
            }
        })
    })

});

export const {useGetCountriesQuery, useGetSingleCountryQuery,useGetLimitCountryQuery
    ,useAddCountryMutation,useUpdateCountryMutation,useDeleteCountryMutation} = countriesApi;