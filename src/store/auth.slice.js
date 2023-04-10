import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
  user: {},
  error: null,
  inProgress: false,
}

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setProgress: (state, action) => {
      state.inProgress = action.payload
    },
    setError: (state, action) => {
      state.error = action.payload
    },
    setUser: (state, action) => {
      state.user = action.payload
    },
    reset: () => initialState,
  },
})

export default slice
