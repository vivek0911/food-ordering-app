import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'

import Path from '@constants/local-path'

function ProductCard({ product }) {
  const navigate = useNavigate()

  return (
    <div>
      <div className="max-h-96">
        <img
          alt={product.alt}
          aria-hidden="true"
          className="max-h-96 w-full cursor-pointer"
          src={product.image}
          onClick={() => navigate(Path.ProductDetails(product.id))}
        ></img>
      </div>
      <div>
        <span>{product.title}</span>
        <div>
          {product.properties.map((prop) => (
            <span
              key={prop.key}
              className="inline-block py-px px-1 mr-1.5 mb-1 overflow-hidden text-xs bg-gray text-ellipsis whitespace-nowrap"
            >
              {prop.value}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

ProductCard.defaultProps = {
  product: PropTypes.shape({
    id: '',
    title: '',
    alt: '',
    properties: [],
    image: '',
  }),
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    alt: PropTypes.string,
    properties: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        key: PropTypes.string,
        value: PropTypes.string,
      })
    ),
    image: PropTypes.string,
  }),
}

export default ProductCard
