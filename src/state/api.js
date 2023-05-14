import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"


const baseQuery = fetchBaseQuery({
    baseUrl: "http://localhost:8090",
    

})

export const api = createApi({
    baseQuery: baseQuery,
    endpoints: (builder) => ({})
})
