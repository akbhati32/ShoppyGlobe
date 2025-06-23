import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { clearCart } from "../redux/cartSlice"
import { FaArrowLeft, FaArrowRight, FaCheckCircle } from "react-icons/fa"
import { GiShoppingCart } from "react-icons/gi";


const Checkout = () => {

  // Accessing cart items from Redux store
  const cartItems = useSelector((state) => state.cart.items)
  const dispatch = useDispatch()

  const navigate = useNavigate()
  const [orderPlaced, setOrderPlaced] = useState(false)

  // Calculating total price of all items in the cart
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  const discount = cartItems.reduce((total, item) => total + (item.price * item.quantity * item.discountPercentage / 100), 0);
  const total = subtotal - discount

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate order placement
    setTimeout(() => {
      setOrderPlaced(true)
      dispatch(clearCart())
    }, 1500)
  }

  // If cart is empty
  if (cartItems.length === 0 && !orderPlaced) {
    return (
      <div className="flex flex-col items-center justify-center text-center px-4 py-16 sm:py-20 gap-6 min-h-screen">
        <GiShoppingCart className="text-main" size={70} />
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          Your cart is empty
        </h2>
        <p className="text-gray-500 text-base sm:text-lg max-w-xl">
          Looks like you haven’t added anything yet.<br/> Fill your cart before checkout!
        </p>
        <button className="btn2"
          onClick={()=> navigate('/products')}>
          Shop Now
        </button>
      </div>
    )
  }

  // After place an order
  if (orderPlaced) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <div className="shadow-2xl bg-gray-100 rounded-2xl p-8 max-w-xl text-center border">
        <FaCheckCircle className="text-green-500 text-6xl mx-auto mb-4" />
        <h2 className="text-2xl font-bold mb-2">Order Placed Successfully!</h2>
        <p className="text-gray-600 mb-6">
          Thank you for shopping with us. Your order has been placed and is being processed.
        </p>
        <button className="inline-block btn2"
          onClick={()=> navigate('/products')}>
          Shop More
        </button>
      </div>
    </div>
    )
  }

  return (
    <>
    <div className="min-h-screen px-8 sm:px-6 lg:px-12 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Shipping and Payment Form */}
        <div className="border rounded-xl px-4 py-6">
          <form onSubmit={handleSubmit}>

            <h2 className="text-xl font-bold mb-4">Shipping Information</h2>
            <div className="grid grid-cols-1 mb-4">
                <label htmlFor="fullName" className="mb-1">Full Name</label>
                <input type="text" id="fullName" required
                  className="textBox"
                />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="mb-1">Email Address</label>
                <input type="email" id="email" required
                  className="textBox"
                />
            </div>

            <div className="mb-4">
              <label htmlFor="address" className="mb-1">Street Address</label>
                <textarea id="address" required
                  className="textBox"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div>
                <label htmlFor="city" className="block mb-1">City</label>
                <input type="text" id="city" required
                  className="textBox"
                />
              </div>
              <div>
                <label htmlFor="state" className="block mb-1">State</label>
                <input type="text" id="state" required
                  className="textBox"
                />
              </div>
              <div>
                <label htmlFor="zip" className="block mb-1">ZIP Code</label>
                <input type="text" id="zip" required
                  className="textBox"
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="phone" className="block mb-1">Phone Number</label>
              <input type="tel" id="phone" required
                className="textBox"
              />
            </div>

            <h2 className="text-xl font-bold mb-4">Payment Information</h2>
            <div className="mb-4 flex flex-col sm:flex-row gap-4">
              <label htmlFor="credit" className="flex items-center cursor-pointer">
                <input type="radio" className="mr-2"
                  id="credit" name="paymentMethod" value="Credit Card"/>
                Credit Card
              </label>

              <label htmlFor="net" className="flex items-center cursor-pointer">
                <input type="radio" className="mr-2"
                  id="net" name="paymentMethod" value="Net Banking"/>
                Net Banking
              </label>

              <label htmlFor="upi" className="flex items-center cursor-pointer">
                <input type="radio" className="mr-2"
                  id="upi" name="paymentMethod" value="UPI"/>
                UPI
              </label>

              <label htmlFor="cod" className="flex items-center cursor-pointer">
                <input type="radio" className="mr-2"
                  id="cod" name="paymentMethod" value="COD"/>
                Cash On Delivery
              </label>
            </div>

            <div className="flex flex-col gap-4">
              <button type="submit" className="btn2 w-full">
                Place Order <FaArrowRight className="inline ml-2" />
              </button>
              <button className="btn2 w-full"
                onClick={()=> navigate('/cart')} >
                <FaArrowLeft className="inline mr-2"/>Back to Cart
              </button>
            </div>
          </form>
        </div>

        {/* Order Summary */}
        <div>
          <div className="bg-gray-100 rounded-lg border p-6 sticky top-4">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>

            <div className="mb-6">
              {cartItems.map((item) => (
                <div key={item.id} className="flex justify-between py-2 border-b">
                  <div className="flex items-center">
                    <span className="font-medium">{item.quantity} x</span>
                    <span className="ml-2 text-gray-700">{item.title}</span>
                  </div>
                  <span className="text-gray-700">${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>

            <div className="space-y-3 mb-6 font-semibold text-gray-700">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Discount</span>
                <span>${discount.toFixed(2)}</span>
              </div>
              <div className="border-t pt-3 flex justify-between font-bold">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
    </>
  )
}

export default Checkout