import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getAllProducts } from '@store/product.slice'

import { ProductCard } from '@components/product-listing'

function ProductListing() {
  const dispatch = useDispatch()
  const products = useSelector((s) => s.product.productList)

  useEffect(() => {
    dispatch(getAllProducts())
  }, [dispatch])

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
