import { useDispatch } from "react-redux"
import { removeFromCart, updateQuantity } from "../redux/cartSlice"
import { FaTrash, FaMinus, FaPlus } from "react-icons/fa"


const CartItem = ({ item }) => {

  const dispatch = useDispatch();

  // Remove from cart functionality
  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart({ id }));     // implemented using redux
  }

  // Increment and decrement of cart items
  const handleUpdateCartItem = (id, add) => {
    dispatch(updateQuantity({ id, add }));       // implemented using redux
  }

  return (
    <>
    <div 
      className="flex flex-col sm:flex-row gap-4 sm:gap-0 sm:items-center justify-between p-4 sm:px-6 rounded-lg border mb-4 transition-transform hover:scale-[1.01] hover:bg-gray-300 duration-300 relative">
      {/* Product Image */}
      <div className="w-24 h-24 flex-shrink-0 mx-auto sm:mx-0">
        <img 
          src={item.thumbnail} 
          alt={item.title}
          className="w-full h-full object-cover rounded-lg  bg-gray-100"
        />
      </div>

      {/* Product title & price */}
      <div className="sm:ml-4 flex-grow text-center sm:text-left">
        <h3 className="text-lg font-semibold">
          {item.title}
        </h3>
        <p className="text-gray-500 text-sm">
          ${item.price.toFixed(2)}
        </p>
      </div>

      {/* Quantity Control buttons */}
      <div className="mt-4 sm:mt-0 flex flex-wrap sm:flex-nowrap items-center justify-center gap-2">
        {/* Increase button */}
        <button
          onClick={() => handleUpdateCartItem(item.id, true)}
          className="btn2 p-2 rounded-full hover:scale-110 transition-transform duration-200"
        >
          <FaPlus size={14} />
        </button>
        {/* Quantity display */}
        <span className="w-10 text-center font-medium text-sm sm:text-base">
          {item.quantity}
        </span>
        {/* Descrease button */}
        <button
          onClick={() => handleUpdateCartItem(item.id, false)}
          className="btn2 p-2 rounded-full hover:scale-110 transition-transform duration-200"
        >
          <FaMinus size={14} />
        </button>
        {/* Remove button */}
        <button
         onClick={() => handleRemoveFromCart(item.id)}
          className="btn2 rounded-full p-2 ml-4 border-red-500 hover:scale-110 transition-transform duration-200"
        >
          <FaTrash size={16} className="text-red-500"/>
        </button>
      </div>

    </div>
    </>
  )
}

export default CartItem