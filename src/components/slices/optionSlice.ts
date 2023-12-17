import { createSlice } from '@reduxjs/toolkit'

export interface OptionState {
  value: [string, string, string, string]
}

const initialState : OptionState = {
  value: ['', '', '', '']
}

const optionSlice = createSlice({
  name: 'score',
  initialState,
  reducers: {
    updateOption: (state, action) => {
      state.value = action.payload
    }
  }
})

export const { updateOption } = optionSlice.actions

export default optionSlice.reducer