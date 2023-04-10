import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'

import productSlice, { getAllProducts } from '@store/product.slice'

import { ProductCard } from '@components/product-listing'

function ProductListing() {
  const dispatch = useDispatch()
  const { products, error } = useSelector((s) => ({
    products: s.product.productList,
    error: s.product.error,
  }))

  useEffect(() => {
    dispatch(getAllProducts())
  }, [dispatch])

  useEffect(() => {
    if (error) {
      toast.error(error)
      productSlice.actions.setError(null)
    }
  }, [error])

  return (
    <div className="grid grid-cols-4 gap-4">
      {products.map((product) => (
        <div key={product.id}>
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  )
}

export default ProductListing
