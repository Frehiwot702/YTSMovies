import { combineReducers, configureStore } from "@reduxjs/toolkit";
import movielistReducer from "./slices/movielistSlice";

const rootReducer = combineReducers(
    {
        movies: movielistReducer
    }
)

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
});