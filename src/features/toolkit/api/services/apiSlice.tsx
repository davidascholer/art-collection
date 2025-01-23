// Need to use the React-specific entry point to allow generating React hooks
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { BASE_URLS } from "../lib/util";
import { ObjectResponseType, ObjectsResponseType } from "../lib/responseTypes";

// Define a service using a base URL and expected endpoints
export const apiSlice = createApi({
  reducerPath: "apiSlice",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URLS.baseURL || "" }),
  tagTypes: ['api'],
  endpoints: (builder) => ({
    getAPIList: builder.query<ObjectsResponseType, void>({
      query: () => {
        console.log("builder", builder);
        return BASE_URLS.listURL;
      },
    }),
    getAPIDetail: builder.query<ObjectResponseType, string>({
      query: (id) => {
        return `${BASE_URLS.detailURL}/${id}`;
      },
    }),
  }),
});

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const { useGetAPIListQuery, useGetAPIDetailQuery } = apiSlice;
