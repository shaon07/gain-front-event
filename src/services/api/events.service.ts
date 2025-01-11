import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const eventApiSlice = createApi({
  reducerPath: "userEventApi",
  refetchOnMountOrArgChange: true,
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
    createEvent: builder.mutation({
      query: (formData) => ({
        url: "/",
        method: "POST",
        body: formData,
      }),
    }),
    updateEvent: builder.mutation({
      query: ({eventId, formData}) => ({
        url: `/${eventId}`,
        method: "PUT",
        body: formData,
      }),
    }),
    confirmEvent: builder.mutation({
      query: ({eventId}) => ({
        url: `/${eventId}/confirm`,
        method: "POST",
      }),
    }),
    getEventDetail: builder.query({
      query: ({eventId}) => `/details/${eventId}`,
    }),
  }),
});

export const {
  useGetAllEventsQuery,
  useGetUserEventsQuery,
  useCreateEventMutation,
  useConfirmEventMutation,
  useGetEventDetailQuery,
  useUpdateEventMutation
} = eventApiSlice;
