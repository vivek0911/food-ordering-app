import axiosInstance from '.'

const productApiPath = {
  product: '/products',
  favourite: '/favourite',
  basket: '/basket',
}

export const getAllProducts = () => axiosInstance.get(productApiPath.product)

export const getProductDetailById = (id) =>
  axiosInstance.get(`${productApiPath.product}/${id}`)
