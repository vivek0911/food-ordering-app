import { createBrowserRouter } from 'react-router-dom'

import Path from '@constants/local-path'

import ProductDetail from '@views/product-detail'
import ProductListing from '@views/product-listing'

import App from './app'
import ErrorPage from './error-page'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: Path.Products,
        element: <ProductListing />,
      },
      {
        path: Path.ProductDetails(':productId'),
        element: <ProductDetail />,
      },
    ],
  },
])

export default router
