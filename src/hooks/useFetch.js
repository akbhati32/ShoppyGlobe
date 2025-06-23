import { useEffect, useState } from "react"

// Custom hook for fetching product list
const useFetch = () => {

  const [products, setProducts] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  // Fetching list of products from API
  useEffect(()=>{
    const fetchData = async ()=> {
      try{
        const response = await fetch("https://dummyjson.com/products")
        
        if(!response.ok){
          throw new Error(`Error ${response.status} ${response.statusText}`)      // Error handling for failed requests
        }
        const data = await response.json();
        setProducts(data.products)
      } catch(err) {
        setError(err.message)     // Error handling on failed data fetch
      } finally {
        setLoading(false)     // Stop loading spinner
      }
    }

    fetchData();
  }, [])

  return {products, error, loading}
}

export default useFetch;