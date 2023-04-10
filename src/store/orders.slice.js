import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
  orders: [],
  error: null,
  inProgress: false,
}

const slice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    setProgress: (state, action) => {
      state.inProgress = action.payload
    },
    setError: (state, action) => {
      state.error = action.payload
    },
    setOrders: (state, action) => {
      state.orders = action.payload
    },
    reset: () => initialState,
  },
})

export default slice
