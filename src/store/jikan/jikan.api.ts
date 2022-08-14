import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const jikanApi = createApi({
  reducerPath: "github/api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.jikan.moe/v4/",
  }),
  endpoints: (build) => ({
    searchAnime: build.query<any, string>({
      query: (animeName: string) => ({
        url: `anime`,
        params: {
          q: animeName,
        },
      }),
    }),
  }),
});

export const { useSearchAnimeQuery } = jikanApi;
