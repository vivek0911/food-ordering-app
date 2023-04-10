import { configureStore } from '@reduxjs/toolkit'

import authSlice from './auth.slice'
import orderSlice from './orders.slice'
import productSlice from './product.slice'

const store = configureStore({
  reducer: {
    product: productSlice.reducer,
    order: orderSlice.reducer,
    auth: authSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({ serializableCheck: false }),
  ],
})

export default store
