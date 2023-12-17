import { createSlice } from '@reduxjs/toolkit'

export interface ConfirmState {
  value: boolean
}

const initialState : ConfirmState = {
  value: false
}

const confirmSlice = createSlice({
  name: 'confirm',
  initialState,
  reducers: {
    updateConfirm: (state, action )=> {
      state.value = action.payload
    }
  }
})

export const { updateConfirm } = confirmSlice.actions

export default confirmSlice.reducer