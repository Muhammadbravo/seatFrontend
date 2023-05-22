import { api } from "./api";

export const ApiSlice = api.injectEndpoints({
    endpoints: builder => ({
        getSeat: builder.query({
            query: ({registrationNumber, courseId}) => `/engine/student/seat/?registration_number=${registrationNumber}&course_code=${courseId}`,
        }),
    })
})

export const { useGetSeatQuery } = ApiSlice;



// import { api } from "./api";

// export const ApiSlice = api.injectEndpoints({
//   endpoints: (builder) => ({
//     getSeat: builder.query({
//       // query: ({registration_number}) => `/student/seat/?registration_number=${encodeURIComponent(registration_number)}`,
//       query: (registrationNumber) => {
//         const params = new URLSearchParams();
//         params.set("registration_number", registrationNumber);
//         return `/engine/student/seat/?${params.toString()}`;
//       },
//     }),
//   }),
// });

// export const { useGetSeatQuery } = ApiSlice;
