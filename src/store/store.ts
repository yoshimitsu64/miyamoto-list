import { configureStore } from "@reduxjs/toolkit";
import { jikanApi } from "./jikan/jikan.api";

export const store = configureStore({
  reducer: {
    [jikanApi.reducerPath]: jikanApi.reducer,
  },
});
