import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from './store'

export interface AppState {
  value: string
}


const initialState : AppState = {
  value: 'menu'
}

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    menu: state => {
      state.value = 'menu'
    } ,
    question: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
    next: state => {
      state.value = 'next'
    }
  }
})

export const { menu, question, next } = appSlice.actions

export const selectApp = (state: RootState) => state.app.value

export default appSlice.reducer