import { apiSlice } from "./apiSlice";
const USERS_ENDPOINT = "/api/user";

export const userApiSlice = apiSlice.injectEndpoints({
    endpoints:(builder) => ({
        login: builder.mutation({
            query:(data) => ({
                url:`${USERS_ENDPOINT}/signIn`,
                method:"POST",
                body:data
            })
        })
    })
})

export const {useLoginMutation} = userApiSlice