import { configureStore } from '@reduxjs/toolkit'
import appReducer from './appSlice'
import scoreReducer from './scoreSlice'

const store = configureStore({
  reducer: {
    app: appReducer,
    score: scoreReducer
  }
})

export default store;

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch