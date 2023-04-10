import { Link, Outlet } from 'react-router-dom'

import Path from '@constants/local-path'

function App() {
  return (
    <>
      <h1 className="p-3 bg-cyan">
        <Link className="text-white" to={Path.Products}>
          Products
        </Link>
      </h1>
      <div className="p-7">
        <Outlet />
      </div>
    </>
  )
}

export default App
