import { createSlice } from '@reduxjs/toolkit'

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
    updateScore: (state, action) => {
      state.value = action.payload
    }
  }
})

export const { updateScore } = scoreSlice.actions

export default scoreSlice.reducer