import { createApi } from "@reduxjs/toolkit/query/react";
import globalFetchQuery from "../../utils/globalFetchBaseQuery";

export const eventApiSlice = createApi({
  reducerPath: "userEventApi",
  refetchOnMountOrArgChange: true,
  baseQuery: globalFetchQuery("/api/events"),
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
      query: ({ eventId, formData }) => ({
        url: `/${eventId}`,
        method: "PUT",
        body: formData,
      }),
    }),
    confirmEvent: builder.mutation({
      query: ({ eventId }) => ({
        url: `/${eventId}/confirm`,
        method: "POST",
      }),
    }),
    getEventDetail: builder.query({
      query: ({ eventId }) => `/details/${eventId}`,
    }),
  }),
});

export const {
  useGetAllEventsQuery,
  useGetUserEventsQuery,
  useCreateEventMutation,
  useConfirmEventMutation,
  useGetEventDetailQuery,
  useUpdateEventMutation,
} = eventApiSlice;
