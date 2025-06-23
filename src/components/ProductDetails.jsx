import { useDispatch } from "react-redux";
import useFetchDetails from "../hooks/useFetchDetails.js";
import { useParams, useNavigate } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";
import { useState, useEffect } from "react";
import { MdEventAvailable } from "react-icons/md";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { FaShippingFast, FaCartArrowDown, FaStar, FaArrowLeft } from "react-icons/fa";
import { BsFillBox2Fill } from "react-icons/bs";
import { addToCart } from "../redux/cartSlice.js";
import { toast } from "react-toastify";

const ProductDetails = ()=>{

  const { id } = useParams()      // Get product ID from URL
  const { product, error, loading } = useFetchDetails(id)     // Custom hook to fetch Selected Product's detail
  const dispatch = useDispatch()
  const [selectedImg, setSelectedImg] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    if (product?.images?.length) {
      setSelectedImg(product.images[0]);
    }
  }, [product]);

  // Handle "Add to Cart" button click
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));     // Redux dispatch to update cart state

    toast.success(`${product.title} added to cart!`, {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
    })
  }

  if(loading) {
    return <LoadingSpinner/>      // Show loading spinner while data is being fetched
  }
  if (error) {
    return (
      <div className="min-h-[500px] flex flex-col justify-center items-center gap-10 bg-body">
        <h1 className="text-7xl font-bold text-gray-600">OOPS!</h1>
        <p className="text-2xl text-red-500 font-semibold">Error : {error}</p>
        <button className="btn2" onClick={()=> navigate('/')}>Back</button>
      </div>
    )
  }
  
  return (
    <>
    <div className="container mx-auto py-12 px-4">
    <div className="max-w-full mx-auto p-6 sm:p-8 rounded-xl">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Product Images */}
        <div className="flex flex-col items-center md:w-1/3 w-full">
          <img
              src={selectedImg}
              alt={product.title}
              className="w-full h-auto object-cover rounded-xl border bg-gray-100"
          />
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            {/* Thumbnail previews */}
            {product.images.map((img, index) => (
              <img
                key={index} src={img} alt="Thumbnail"
                onClick={() => setSelectedImg(img)}
                className="w-16 h-16 rounded-md cursor-pointer border-2 border-gray-300 hover:border-main"
              />
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="md:w-2/3 w-full">
          {/* Product tags & brand */}
          <p className="capitalize text-gray-500 text-sm">
            {`${product.tags[0]} > ${product.tags[1]} > ${product.brand}`}
          </p>

          {/* Product title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-wide mt-4">
            {product.title}
          </h1>
           
          {/* Price & Discount calculation */}
          <div className="mt-6 flex-wrap justify-between gap-4 md:flex">
            <div className="flex gap-3 items-center">
              <span className="text-2xl font-semibold">
                <span className="text-sm align-super">$</span>
                {product.price}
              </span>
              {product.discountPercentage > 0 && (
                <span className="text-gray-500 line-through text-md">
                  {/* Calculate original price before discount */}
                  ${(product.price / (1 - product.discountPercentage / 100)).toFixed(2)}
                </span>
              )}
              <span className="text-lg text-green-600 pt-1">
                {product.discountPercentage}% Off
              </span>
            </div>
            
            {/* Display stars by mapping over an array of 5, and conditionally color them based on rating */}
            {product.rating && (
            <div className="flex items-center gap-2 text-yellow-500 text-md">
              {[...Array(5)].map((_, i) => (
                <FaStar 
                  key={i} 
                  className={i < Math.round(product.rating) ? "" : "text-gray-300"} 
                />
              ))}
              <span className="">{product.rating.toFixed(1)}</span>
            </div>
            )}
          </div>
        
          {/* Product Description */}
          <div className="border rounded p-2 mt-8">
            <span className="text-sm">About this item</span>
            <p className="mt-2 text-md">{product.description}</p>
          </div>
          
          {/* Additional Information */}
          <div className="border rounded p-2 mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="flex gap-2">
              <MdEventAvailable size={35} className="pt-1"/>
              <div>
                <p className="text-sm">Availability</p>
                <p className="text-sm font-semibold">{product.availabilityStatus}</p>
              </div>
            </div>
            <div className="flex gap-2">
              <IoShieldCheckmarkSharp size={35} className="pt-1"/>
              <div>
                <p className="text-sm">Warranty</p>
                <p className="text-sm font-semibold">{product.warrantyInformation}</p>
              </div>
            </div>
            <div className="flex gap-2">
              <FaShippingFast size={35} className="pt-1"/>
              <div>
                <p className="text-sm">Shipping</p>
                <p className="text-sm font-semibold">{product.shippingInformation}</p>
              </div>
            </div>
            <div className="flex gap-2">
              <BsFillBox2Fill size={32} className="pt-1"/>
              <div>
                <p className="text-sm">Stock</p>
                <p className="text-sm font-semibold">{product.stock}</p>
              </div>
            </div>
          </div>
        
          {/* Action Button */}
          <div className="mt-6 flex flex-col sm:flex-row justify-between gap-4">
            <button 
              className="btn2 w-full sm:w-1/2" 
              onClick={()=> navigate('/products')}
            >
              <FaArrowLeft size={22} className="inline mr-2"/>Back to Products
            </button>
            <button 
              className="btn2 w-full sm:w-1/2" 
              onClick={() => handleAddToCart(product)}>
              Add to Cart <FaCartArrowDown size={22} className="inline ml-2"/>
            </button>
          </div>
            
        </div>
      </div>

      {/* Customer Reviews */}
      <div className="w-full md:w-2/3 mx-auto mt-10">
        <h2 className="text-xl font-semibold">Reviews</h2>
        <div className="mt-4 space-y-4">
          {product.reviews.map((review, index) => (
            <div key={index} 
              className="p-4 rounded border bg-gray-100 flex flex-col gap-1"
            >
              <span className="font-semibold text-md">{review.reviewerName}</span>
              <span className="text-yellow-500 text-sm">
                <FaStar className="inline"/> {review.rating} / 5
              </span>
              <span className="text-sm">{review.comment}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
    </div>
    </>
  )
}

export default ProductDetails;