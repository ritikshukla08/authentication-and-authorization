import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "",
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
    signUp: builder.mutation({
      query: (signupData) => ({
        url: "/signup",
        method: "POST",
        body: signupData,
      }),
      invalidatesTags: ["Login"],
    }),
  }),
});

export const { useGetAllDataQuery, useVerifyDataMutation, useSignUpMutation } =
  productsApi;
