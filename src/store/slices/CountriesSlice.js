import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";


export const countriesApi = createApi({
    reducerPath: 'countriesApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://ecommerce-h6sh.onrender.com/'}),
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
            query(country) {
                const {country_id} = country;
                return {
                    url: `countries/${country_id}`,
                    method: 'PUT',
                    body: (country),
                    headers: {
                        'Content-type':'application/json: charset=UTF-8'
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