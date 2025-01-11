import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import userSlice from "./slices/user.slice";
import eventSlice from "./slices/event.slice";
import { persistReducer } from "redux-persist";
import { persistStore } from "redux-persist";
import { userApiSlice } from "../../services/api/user.service";
import { eventApiSlice } from "../../services/api/events.service";

const persistConfig = {
  key: "root",
  storage,
  blacklist: [userApiSlice.reducerPath, eventApiSlice.reducerPath, "eventSlice"],
};

const rootReducer = combineReducers({
  userSlice: userSlice,
  eventSlice: eventSlice,
  [userApiSlice.reducerPath]: userApiSlice.reducer,
  [eventApiSlice.reducerPath]: eventApiSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    })
      .concat(userApiSlice.middleware)
      .concat(eventApiSlice.middleware),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
