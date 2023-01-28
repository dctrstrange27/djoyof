import React, { useEffect, useState } from 'react'
import { API, getUser, saveUser } from '../../Utils'
import Prod from './Prod'

function Products({cartItems,setCartItems}) {
  
  const [products, setProducts] = useState([])

  //fetch data from server!!!
  const fetchProducts = async()=>{
      const res = await API.get("/getAllProducts")
      setProducts(res.data.products)
  }
    const addToCart = async(prod) => {
      const exist = cartItems.find(p => p._id === prod._id)
      if(exist){
        setCartItems(cartItems.map((cart) => cart._id === prod._id ? { ...cart, product_qty: cart.product_qty + 1 } : cart))
      } else {
        setCartItems([...cartItems, {  ...prod, product_qty: 1 }])
      }
      const res = await API.post("/addToCart",{
        id: getUser()._id,
        cartItems: cartItems
      })
      console.log(res)
    }
    useEffect(()=>{
      fetchProducts()
  },[])


  return (
    <>
        <div className='w-[70rem] h-auto grid md:grid-cols-2 lg:grid-cols-3 border-[1px p-16'>
          {
            products.map(((prod,idx)=>(
              <Prod key={idx} prod={prod} addToCart={addToCart} />
            )))
          }           
        </div>
    </>
  )
}

export default Products