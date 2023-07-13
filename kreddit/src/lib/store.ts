import { configureStore } from '@reduxjs/toolkit';
import dialogReducer from './dialogSlice';
import searchReducer from './searchSlice';

export const store = configureStore({
    reducer: {
        search: searchReducer,
        dialog: dialogReducer
    }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;