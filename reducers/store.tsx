import { configureStore } from '@reduxjs/toolkit'
import createPlayerWithNumber from './playerReducer'



export const store = configureStore({
  reducer: {
    player1: createPlayerWithNumber(1),
    player2: createPlayerWithNumber(2),
    player3: createPlayerWithNumber(3),
    player4: createPlayerWithNumber(4),
    player5: createPlayerWithNumber(5),
    player6: createPlayerWithNumber(6),
  }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch