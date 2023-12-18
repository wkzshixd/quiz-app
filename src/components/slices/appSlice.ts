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
    final: state => {
      state.value = 'final'
    }
  }
})

export const { menu, question, final } = appSlice.actions

export default appSlice.reducer