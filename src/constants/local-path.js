const PathAuth = {
  Login: '/login',
  ForgotPassword: '/forgot-password',
  ResetPassword: '/reset-password',
  SuccessEmail: '/success-email',
  EmailVerification: '/email-verification',
}

const PathProduct = {
  Products: '/products',
  ProductDetails: (paramId) => `/product/${paramId}`,
}

const Path = {
  // No layout
  Root: '/',

  // Auth layout
  ...PathAuth,

  // product layout
  ...PathProduct,
}

export default Path
