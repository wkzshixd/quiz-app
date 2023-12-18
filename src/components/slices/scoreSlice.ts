import { createSlice } from '@reduxjs/toolkit'

export interface ScoreState {
  value: {
    correct: number
    incorrect: number
  }
}

const initialState : ScoreState = {
  value : {
    correct: 0,
    incorrect: 0,
  }
}

const scoreSlice = createSlice({
  name: 'score',
  initialState,
  reducers: {
    updateScore: (state, action) => {
      state.value.correct += action.payload.correct;
      state.value.incorrect += action.payload.incorrect;
    }
  }
})

export const { updateScore } = scoreSlice.actions

export default scoreSlice.reducer