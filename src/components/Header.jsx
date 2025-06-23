import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { FaShoppingCart, FaBars } from "react-icons/fa";

const Header = ()=>{

  // Accessing cart items from Redux store
  const cartItems = useSelector(state => state.cart.items)
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-main top-0 z-50 ">
      <div className='flex justify-between items-center mx-auto p-3 container relative'>
        {/* Logo */}
        <div className="text-2xl font-semibold ">
          <Link to="/">
            <span className='text-[#E3B239]'>Shoppy</span>
            <span className='text-white'>Globe</span>
          </Link>
        </div>

        {/* Desktop Navigation menus */}
        <nav className="hidden md:flex items-center space-x-10">
          <ul className="list-none flex gap-6 items-center">
            <li className='text-white hover:text-gray-300 text-lg'>
              <Link to="/">Home</Link>
            </li>
            <li className='text-white hover:text-gray-300 text-lg'>
              <Link to="/products">Shop</Link>
            </li>
            {/* Shopping Cart */}
            <li className='text-white relative flex items-center hover:text-gray-300 hover:scale-110 duration-200 pt-1'>
              <Link to="/cart">
                <FaShoppingCart className='text-2xl'/>
              </Link>
              {cartCount > 0 && (
                <span 
                  className="absolute -top-2 -right-3 bg-red-500 text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </li> 
          </ul>
        </nav>

        {/* Hamburger menu */}
        <button 
          onClick={()=> setIsMenuOpen(!isMenuOpen)}
          className='text-white md:hidden text-2xl focus:outline-none'
        >
          <FaBars className={`${isMenuOpen ? 'rotate-90' : ""} transition-transform duration-300 `}/>
        </button>
      </div>

        {/* Mobile Nav Menu */}
        <div className={`md:hidden bg-main text-white transition-all duration-300 
            ${isMenuOpen ? "max-h-52 opacity-100 py-4 px-6" : "max-h-0 opacity-0 overflow-hidden"} `}>
          <ul className="flex gap-6 justify-center text-lg font-medium">
            <li>
              <Link to="/" 
                onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/products" 
                onClick={() => setIsMenuOpen(false)}>
                Shop
              </Link>
            </li>
            <li>
              <Link to="/cart" 
                onClick={() => setIsMenuOpen(false)}>
                <FaShoppingCart className="text-2xl" />
                  {cartCount > 0 && (
                    <span 
                      className="absolute top-15 right-30 bg-red-500 text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                      {cartCount}
                    </span>
                  )}
              </Link>
            </li>
          </ul>
        </div>
    </header>
  )
}

export default Header;