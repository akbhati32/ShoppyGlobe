import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { FaStar, FaShoppingCart } from "react-icons/fa";
import { toast } from 'react-toastify'
import { Link } from "react-router-dom";


const ProductItem = ({ product })=>{

  const dispatch = useDispatch()

  // Add to cart functionality
  const handleAddToCart = () => {
    dispatch(addToCart(product))

    toast.success(`${product.title} added to cart!`, {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
    });
  }

  // Calculate original price from discounted price 
  const discountPercentage = product.discountPercentage || 0;
  const originalPrice = (product.price / (1 - discountPercentage / 100)).toFixed(2);

  return (
    <>
    <div className="rounded-2xl p-4 border transition-transform hover:scale-[1.03] hover:bg-gray-300 duration-300 relative">
      {/* Thumbnail */}
      <div className="relative">
        <Link to={`/product/${product.id}`}>
          <img 
            src={product.thumbnail} 
            alt={product.title} 
            className="w-md h-md object-cover rounded-2xl mb-4 transition-transform duration-300 hover:scale-105 bg-gray-100"
          />
        </Link>
        {/* Show discount badge only if there's a discount */}
        {discountPercentage > 0 && (
          <span 
            className="absolute top-3 right-3 bg-green-600 text-white px-3 py-1 text-xs font-semibold rounded-full">
            {discountPercentage}% OFF
          </span>
        )}
      </div>
      
      {/* Product name */}
      <h2 className="text-lg font-semibold text-gray-900 truncate">
        {product.title}
      </h2>
      
      {/* Rating & stock */}
      <div className="flex justify-between items-start mt-2">
        <div className="flex items-center gap-2 text-yellow-500 text-sm">
          <FaStar/>
          <span className="font-medium">
            {product.rating.toFixed(1)}
          </span>
        </div>
        <span 
          className={`text-xs font-medium px-2 py-1 rounded-full border 
          ${product.stock > 10 ? "text-green-700" : " text-red-600"}`}>
          {product.stock > 10 ? "In stock" : "Limited stock"}
        </span>
      </div>
      
      {/* Discount & Add to cart button */}
      <div className="flex justify-between items-start mt-2">
        <div>
          {discountPercentage > 0 && (
            <p className="text-gray-500 text-sm line-through">
              ${originalPrice}
            </p>
          )}
          <p className="text-green-600 text-md font-semibold">
            ${product.price}
          </p>
        </div>
        <button 
          onClick={handleAddToCart}
          className="btn3 mt-2"
        >
          Add <FaShoppingCart className="inline"/>
        </button>
      </div>
    </div>
    </>
  )
}

export default ProductItem;