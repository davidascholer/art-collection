// Need to use the React-specific entry point to allow generating React hooks
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { PokemonListReturnType, PokemonDetailReturnType } from "../../util/types";
import { BASE_URLS } from "../../util/constants";
// import type { Pokemon } from './types'

// Define a service using a base URL and expected endpoints
export const apiSlice = createApi({
  reducerPath: "apiSlice",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URLS.dataApiURL || "" }),
  endpoints: (builder) => ({
    getPokemonList: builder.query<PokemonListReturnType, void>({
      query: () => {
        return "pokemon";
      },
    }),
    getPokemonDetail: builder.query<PokemonDetailReturnType, string>({
      query: (name) => {
        console.log("name", name);
        return `pokemon/${name}`;
      },
    }),
  }),
});

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const { useGetPokemonListQuery, useGetPokemonDetailQuery } = apiSlice;
