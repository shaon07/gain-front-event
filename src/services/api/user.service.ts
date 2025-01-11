import { createApi } from "@reduxjs/toolkit/query/react";
import globalFetchQuery from "../../utils/globalFetchBaseQuery";

export const userApiSlice = createApi({
  reducerPath: "userApi",
  refetchOnMountOrArgChange: true,
  baseQuery: globalFetchQuery("/api"),
  endpoints: (builder) => ({
    getUser: builder.query({
      query: () => "/posts",
    }),
    login: builder.mutation({
      query: (payload) => ({
        url: "/auth/login",
        method: "POST",
        body: payload,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
      }),
    }),
    register: builder.mutation({
      query: (formData) => ({
        url: "/auth/register",
        method: "POST",
        body: formData,
      }),
    })
  }),
});

export const { useLoginMutation, useLogoutMutation, useRegisterMutation } =
  userApiSlice;
