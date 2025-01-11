import { createSlice } from "@reduxjs/toolkit";
import { eventApiSlice } from "../../../services/api/events.service";

interface UserEventType {
  allEvents: any[];
  eventNameFilter: string;
  eventLocationFilter: string;
  eventDateStartTimeFilter: string;
  eventDateEndTimeFilter: string;
}

const initialState: UserEventType = {
  allEvents: [],
  eventNameFilter: "",
  eventLocationFilter: "",
  eventDateStartTimeFilter: "",
  eventDateEndTimeFilter: "",
};

export const eventSlice = createSlice({
  name: "eventSlice",
  initialState,
  reducers: {
    setEventNameFilter: (state, action) => {
      state.eventNameFilter = action.payload;
    },
    setEventLocationFilter: (state, action) => {
      state.eventLocationFilter = action.payload;
    },
    setEventDateStartTimeFilter: (state, action) => {
      state.eventDateStartTimeFilter = action.payload;
    },
    setEventDateEndTimeFilter: (state, action) => {
      state.eventDateEndTimeFilter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      eventApiSlice.endpoints.getAllEvents.matchFulfilled,
      (state, action) => {
        state.allEvents = action.payload.events;
      }
    );
  },
});

export const {
  setEventNameFilter,
  setEventLocationFilter,
  setEventDateStartTimeFilter,
  setEventDateEndTimeFilter,
} = eventSlice.actions;

export default eventSlice.reducer;
