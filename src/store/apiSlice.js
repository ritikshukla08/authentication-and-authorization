import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jayapi.oscod.dev/",
  }),
  tagTypes: ["Login"],
  endpoints: (builder) => ({
    getAllData: builder.query({
      query: () => ({
        url: "/users/get_user_data",
        method: "post",
        headers: { Authorization: "jwt " + localStorage.getItem("token") },
      }),
      providesTags: ["Login"],
    }),
    verifyData: builder.mutation({
      query: (data) => ({
        url: "/login",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Login"],
    }),
  }),
});

export const { useGetAllDataQuery, useVerifyDataMutation } = productsApi;
