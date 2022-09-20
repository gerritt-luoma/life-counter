import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterReducer'

export const store = configureStore({
  reducer: {
    player1: counterReducer,
    player2: counterReducer,
    player3: counterReducer,
    player4: counterReducer,
    player5: counterReducer,
    player6: counterReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch