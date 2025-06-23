import { useSelector } from "react-redux"
import {useNavigate } from "react-router-dom"
import { GiShoppingCart } from "react-icons/gi";
import CartItem from "./CartItem";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const Cart = ()=>{

  // Accessing cart items from Redux store
  const cartItems = useSelector((state) => state.cart.items)
  const navigate = useNavigate()

  // Calculating total price of all items in the cart after extra discount
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  const discount = cartItems.reduce((total, item) => total + (item.price * item.quantity * item.discountPercentage / 100), 0);
  const total = subtotal - discount

  // If Cart is empty
  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center text-center px-4 py-16 sm:py-20 gap-6 min-h-screen">
        <GiShoppingCart className="text-main" size={70} />
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          Your cart is empty
        </h2>
        <p className="text-gray-500 text-base sm:text-lg max-w-xl">
          Looks like you haven’t added anything yet.<br/> Browse products and fill your cart!
        </p>
        <button className="btn2"
          onClick={()=> navigate('/products')}>
          Shop Now
        </button>
      </div>
    )
  }

  return (
    <>
    <div className="container mx-auto py-12 px-4 min-h-screen">
    <div className="max-w-6xl mx-auto p-4 sm:p-8 rounded-xl flex flex-col md:flex-row gap-8">

      {/* Cart Items */}
      <div className="w-full md:w-2/3">
        {/* Render each item in the cart using CartItem component 
          * Passing data as props
          */}
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
        
      {/* Order Summary */}
      <div className="w-full md:w-1/3 ">
        <div className="rounded-lg p-6 border sticky top-4 bg-gray-100">
          <h2 className="text-2xl font-bold mb-4">Order Summary</h2>

          <div className="space-y-3 mb-6 text-lg font-semibold text-gray-600">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Discount</span>
              <span>${discount.toFixed(2)}</span>
            </div>
            <div className="border-y py-3 flex justify-between">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>

          {/* Proceed to checkout button */}
          <div className="flex flex-col gap-4">
            <button
              onClick={()=> navigate('/checkout')} 
              className="btn2 w-auto"
            >
              Proceed to Checkout <FaArrowRight className="inline ml-2" />
            </button>
            <button 
              onClick={()=> navigate('/products')} 
              className="btn2 w-auto"
            >
              <FaArrowLeft className="inline mr-2"/>Continue Shopping
            </button>
          </div>
        </div>
      </div>

    </div>
    </div>
    </>
  )
}

export default Cart;