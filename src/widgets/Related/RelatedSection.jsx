import React, {useState, useEffect} from 'react'
import axios from 'axios'

const RelatedSection = (props) => {
  const [products, setProducts] = useState([]);

  // fetches products data from Atelier API
  useEffect(() => {
    axios.get('http://3.137.191.193/products')
         .then((res) => {
           setProducts(res.data)
         })
         .catch((err) => {
           throw err;
         })
  }, [])

  return (
    <div>
      Related Section will be here.
    </div>
  )

}


export default RelatedSection