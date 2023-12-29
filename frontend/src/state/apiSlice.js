import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({baseUrl:"http://localhost:8080"})

export const apiSlice = createApi({
    baseQuery,
    tagTypes:['user'],
    // eslint-disable-next-line no-unused-vars
    endpoints:(builder) => ({})
})