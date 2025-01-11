import {
  BaseQueryFn,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";
import { toast } from "react-toastify";

const globalFetchQuery = (
  baseUrl: string
): BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> => {
  const baseQuery = fetchBaseQuery({
    baseUrl: `http://localhost:8000${baseUrl}`,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  });

  return async (args, api, extraOptions) => {
    const result = await baseQuery(args, api, extraOptions);

    if (result.error) {
      if (result.error.status === 401) {
        toast.warn("Unauthorized! You might want to log out the user.");
        localStorage.removeItem("token");
        localStorage.removeItem("persist:root");
        window.location.href = "/auth/login";
      }
    } else {
      console.log("Response from API:", result.data);
    }

    return result;
  };
};

export default globalFetchQuery;
