import { createSlice, PayloadAction } from '@reduxjs/toolkit'

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

export default appSlice.reducer