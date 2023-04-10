import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import Path from '@constants/local-path'

import ProductDetail from '@views/product-detail'
import ProductListing from '@views/product-listing'

import App from './app'
import ErrorPage from './error-page'
import reportWebVitals from './reportWebVitals'
import store from '@store'

import './index.css'
import 'react-toastify/dist/ReactToastify.css'

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
        path: Path.ProductDetails,
        element: <ProductDetail />,
      },
    ],
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
    <ToastContainer autoClose={5000} position="top-right" />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
