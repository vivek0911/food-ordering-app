import { createSlice } from '@reduxjs/toolkit'

import {
  getAllProducts as getAllProductsService,
  getProductDetailById as getProductDetailByIdService,
} from '@services/product'

export const initialState = {
  inProgress: false,
  error: null,
  productList: [],
  productDetails: {},
}

const slice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProgress: (state, action) => {
      state.inProgress = action.payload
    },
    setError: (state, action) => {
      state.error = action.payload
    },
    setProductList: (state, action) => {
      state.productList = action.payload
    },
    setProductDetails: (state, action) => {
      state.productDetails = action.payload
    },
    reset: () => initialState,
  },
})

export const getAllProducts = () => async (dispatch) => {
  try {
    dispatch(slice.actions.setProgress(true))
    const data = await getAllProductsService()
    dispatch(slice.actions.setProductList(data))
  } catch (err) {
    dispatch(slice.actions.setError(err))
  } finally {
    dispatch(slice.actions.setProgress(false))
  }
}

export const getProductDetailById = (productId) => async (dispatch) => {
  try {
    dispatch(slice.actions.setProgress(true))
    const data = await getProductDetailByIdService(productId)
    dispatch(slice.actions.setProductDetails(data))
  } catch (err) {
    dispatch(slice.actions.setError(err))
  } finally {
    dispatch(slice.actions.setProgress(false))
  }
}

export default slice
