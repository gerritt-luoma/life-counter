import { configureStore } from '@reduxjs/toolkit'
import createPlayerWithNumber from './playerReducer'
import menuReducer from './menuReducer';
import gameReducer from './gameReducer';



export const store = configureStore({
  reducer: {
    player0: createPlayerWithNumber(0),
    player1: createPlayerWithNumber(1),
    player2: createPlayerWithNumber(2),
    player3: createPlayerWithNumber(3),
    player4: createPlayerWithNumber(4),
    player5: createPlayerWithNumber(5),
    menu: menuReducer,
    game: gameReducer,
  }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch