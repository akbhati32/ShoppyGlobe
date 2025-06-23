import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ProductItem from "./ProductItem";
import useFetch from "../hooks/useFetch.js";
import LoadingSpinner from "./LoadingSpinner";

const ProductList = ()=> {

  const { loading, error, products } = useFetch();      // Fetching products by custom hook
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('All')
  const categories = ['All', 'Beauty', 'Fragrances', 'Furniture', 'Groceries']
  const {category} = useParams()

  useEffect(()=>{
    if(category && categories.includes(category)) {
      setSelectedCategory(category)
    } else {
      setSelectedCategory('All')
    }
  }, [category])

  // Filter products by category
  useEffect(()=>{
    let filtered = products;

    if(selectedCategory !== 'All') {
      filtered = filtered.filter(product => product.category === selectedCategory.toLowerCase())
    }
    setFilteredProducts(filtered)
  },[products, selectedCategory])

   // Filter products based on search query
  function handleSearch(){
    let filtered = products;
    if(searchQuery.trim() !== ''){
      filtered = filtered.filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    }
    setFilteredProducts(filtered)
  }
 
  function handleEnter(e){
    if(e.key === 'Enter'){
      handleSearch()
    }
  }

  if (loading) return <LoadingSpinner/>; 
  if (error) {                        
    return (
      <div className="min-h-[500px] flex flex-col justify-center items-center gap-10 bg-body">
        <h1 className="text-7xl font-bold text-gray-600">OOPS!</h1>
        <p className="text-2xl text-red-500 font-semibold">Error : {error}</p>
        <Link to="/"><button className="btn2">Back</button></Link>
      </div>
    )
  }

  return (
  <div className="container mx-auto py-12 px-4 min-h-screen">

    <div className="flex flex-col items-center justify-center mb-4 gap-2 sm:flex-row sm:items-center sm:justify-center">
      {/* Category selection */}
      <select 
        className="py-2 px-5 rounded w-auto outline-none border hover:text-white transition duration-400 hover:bg-main sm:w-auto" 
        value={selectedCategory}
        onChange={(e)=> setSelectedCategory(e.target.value)}
      >
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>

      {/* Search bar */}
      <input 
        type="text" 
        placeholder="Search products here.." 
        value={searchQuery}
        onChange={(e)=> setSearchQuery(e.target.value)}
        onKeyDown={handleEnter}
        className="py-2 px-10 border focus:outline-none focus:ring-2 rounded w-full max-w-xl sm:w-[300px] lg:w-[400px]" />
      <button 
        onClick={handleSearch} 
        className="btn2 py-2 px-5 rounded w-35"
      >
        Search
      </button>
    </div>

    {/* Rendering list of products */}
    {filteredProducts.length > 0 ? (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-12">
        {filteredProducts.map((product) => (
          <ProductItem key={product.id} product={product} />      // Passing props to ProductItem component
        ))}
      </div>
      ) : (
      <div className="text-center text-gray-500 font-medium text-lg">
        No products found matching "<span className="font-bold">{searchQuery}</span>"
      </div>
    )}

  </div>
  )
}

export default ProductList;