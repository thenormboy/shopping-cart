import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom' 
import App from './App.jsx'
import Products from './Products.jsx'
import About from './About.jsx'
import Home from './Home.jsx'
import Cart from './Cart.jsx'
import './index.css'
import { element } from 'prop-types'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/cart',
        element: <Cart />
      },
      {
        path: '/homepage',
        element: <Home />
      },
      {
        path: '/products',
        element: <Products />
      },
      {
        path: '/about',
        element: <About />
      }
    ]
  },
]

)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
