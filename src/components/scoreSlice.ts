import { createSlice } from '@reduxjs/toolkit'
import { RootState } from './store'

export interface ScoreState {
  value: number
}


const initialState : ScoreState = {
  value: 0
}

const scoreSlice = createSlice({
  name: 'score',
  initialState,
  reducers: {
    update: (state, action) => {
      state.value = action.payload
    }
  }
})

export const { update } = scoreSlice.actions

export const selectStore = (state: RootState) => state.app.value

export default scoreSlice.reducer