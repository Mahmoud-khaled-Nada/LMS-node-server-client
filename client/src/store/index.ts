import { configureStore } from "@reduxjs/toolkit";
import languageSlice from "./slices/languageSlice";
import userSlice from "./slices/userSlice";


export const store = configureStore({
  reducer: {
    user: userSlice,
    languageReducer: languageSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
  devTools: true,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;