import { configureStore } from '@reduxjs/toolkit'
import conterReducer from '../features/counter/counterSlice';

const store = configureStore({
  reducer: {
    counter: conterReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
