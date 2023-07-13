import { configureStore } from '@reduxjs/toolkit';
import dialogReducer from './dialogSlice';
import resultsReducer from './resultsSlice';

export const store = configureStore({
    reducer: {
        results: resultsReducer,
        dialog: dialogReducer
    }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;