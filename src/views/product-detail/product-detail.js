import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

import productSlice, { getProductDetailById } from '@store/product.slice'

import Button, { ButtonVariant } from '@common/button'

function ProductDetail() {
  const { productId } = useParams()
  const dispatch = useDispatch()
  const { productDetail, error } = useSelector((s) => ({
    productDetail: s.product.productDetails,
    error: s.product.error,
  }))

  useEffect(() => {
    if (productId) dispatch(getProductDetailById(productId))
  }, [dispatch, productId])

  useEffect(() => {
    if (error) {
      toast.error(error)
      productSlice.actions.setError(null)
    }
  }, [error])

  return (
    <div className="grid grid-cols-2 gap-x-3">
      <div className="max-h-96">
        <img
          alt={productDetail.alt}
          className="max-h-96 max-w-3xl w-full"
          src={productDetail.image}
        />
      </div>
      <div>
        <div>{productDetail.title}</div>
        <div>
          {productDetail.price} {productDetail.currency}
        </div>
        <div className="flex flex-col mb-8">
          {productDetail?.properties?.map((prop) => (
            <div key={prop.key} className="flex">
              <span className="text-black-light">
                {prop.key} &nbsp;&nbsp;&nbsp;&nbsp;
              </span>
              <span>{prop.value}</span>
            </div>
          ))}
        </div>
        <Button
          className="w-1/4"
          variant={ButtonVariant.Secondary}
          onClick={() => {}}
        >
          Add to cart
        </Button>
      </div>
    </div>
  )
}

export default ProductDetail
