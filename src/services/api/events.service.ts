import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const eventApiSlice = createApi({
  reducerPath: "userEventApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/api/events",
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getUserEvents: builder.query({
      query: () => "/my-events",
    }),
    getAllEvents: builder.query({
      query: () => "/",
    }),
    register: builder.mutation({
      query: (formData) => ({
        url: "/auth/register",
        method: "POST",
        body: formData,
      }),
    }),
  }),
});

export const {
  useRegisterMutation,
  useGetAllEventsQuery,
  useGetUserEventsQuery,
} = eventApiSlice;
