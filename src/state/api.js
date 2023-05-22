import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"


const baseQuery = fetchBaseQuery({
    baseUrl: "http://muhdbravo.pythonanywhere.com/",
    

})

export const api = createApi({
    baseQuery: baseQuery,
    endpoints: (builder) => ({})
})
