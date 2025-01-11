import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { userApiSlice } from "../../../services/api/user.service";

interface UserStateType {
  isAuthenticated: boolean;
  userInfo: Record<string, any>;
}

const initialState: UserStateType = {
  isAuthenticated: false,
  userInfo: {},
};

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setUserInfo: (state, action: PayloadAction<Record<string, any>>) => {
      state.userInfo = action.payload;
    },
    setIsAuthenticated: (state, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload;
    },
    removeUserInfo: (state) => {
      state.userInfo = {};
      state.isAuthenticated = false;
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      userApiSlice.endpoints.login.matchFulfilled,
      (state, action) => {
        console.log(action.payload.user.toke);
        state.userInfo = action.payload;
        state.isAuthenticated = true;
        localStorage.setItem("token", action.payload.user.token);
      }
    ),
      builder.addMatcher(
        userApiSlice.endpoints.logout.matchFulfilled,
        (state) => {
          state.userInfo = {};
          state.isAuthenticated = false;
          localStorage.removeItem("token");
        }
      ),
      builder.addMatcher(
        userApiSlice.endpoints.register.matchFulfilled,
        (state, action) => {
          state.userInfo = action.payload;
          state.isAuthenticated = true;
          localStorage.setItem("token", action.payload.user.token);
        }
      );
  },
});

export const { removeUserInfo, setIsAuthenticated, setUserInfo } =
  userSlice.actions;

export default userSlice.reducer;
