import { configureStore } from "@reduxjs/toolkit";
import settingsSlice from "./services/settingsSlice";
import userSlice from "./services/userSlice";
import { apiSlice } from "../api/query/services/apiSlice";

//
const middleware = [apiSlice.middleware];
const store = configureStore({
  reducer: {
    user: userSlice,
    settings: settingsSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
    
      immutableCheck: { warnAfter: 128 },
      serializableCheck: { warnAfter: 128 },
    }).concat(middleware),
});


// Get the type of our store variable
export type AppStore = typeof store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = AppStore["dispatch"];

export default store;
