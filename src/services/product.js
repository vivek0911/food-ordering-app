import axiosInstance from '.'

export const getAllProducts = () => axiosInstance.get('/products')

export const getProductDetailById = (id) => axiosInstance.get(`/products/${id}`)
