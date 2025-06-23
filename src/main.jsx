import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './components/Home.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import shopStore from './redux/shopStore.js'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { lazy, Suspense } from 'react'
import { Provider } from 'react-redux';


// Lazy load components and code splitting
const ProductList = lazy(()=> import('./components/ProductList.jsx'))
const ProductDetails = lazy(()=> import('./components/ProductDetails.jsx'))
const Cart = lazy(()=> import('./components/Cart.jsx'))
const Checkout = lazy(()=> import('./components/Checkout.jsx'))
const LoadingSpinner = lazy(()=> import('./components/LoadingSpinner.jsx'))
const NotFound = lazy(()=> import('./components/NotFound.jsx'))


// Routes for pages
const shopRouter = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <NotFound/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/products',
        element: <ProductList/>
      },
      {
        path: '/products/:category',
        element: <ProductList/>
      },
      {
        path: '/product/:id',
        element: <ProductDetails/>
      },
      {
        path: '/cart',
        element: <Cart />
      },
      {
        path: '/checkout',
        element: <Checkout />
      }
    ],
  }
]);

createRoot(document.getElementById('root')).render(
  <Provider store={shopStore}>
    <Suspense fallback={<LoadingSpinner/>}>
      <RouterProvider router={shopRouter} />
    </Suspense>
  </Provider>
)
