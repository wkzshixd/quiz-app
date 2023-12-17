import { configureStore } from '@reduxjs/toolkit'
import appReducer from './slices/appSlice'
import scoreReducer from './slices/scoreSlice'
import optionReducer from './slices/optionSlice'
import confrimReducer from './slices/confirmSlice'

const store = configureStore({
  reducer: {
    app: appReducer,
    score: scoreReducer,
    option: optionReducer,
    confirm: confrimReducer
  }
})

export default store;

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch