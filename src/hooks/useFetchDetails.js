import { useEffect, useState } from "react"

// Custom hook for fetching Selected Product Details
const useFetchDetails = (id)=> {

  const [product, setProduct] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    const fetchProductDetails = async ()=> {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`)
        
        if(!response.ok){
          throw new Error(`Error ${response.status} ${response.statusText}`)      // Error handling for failed requests
        }
        const data = await response.json()
        setProduct(data)      // Store fetched data to state
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)     // Stop loading spinner
      }
    }

    fetchProductDetails()
  }, [id])

  return {product, error, loading}
}

export default useFetchDetails;