import React, { useEffect, useState } from 'react'
import { API, getUser, saveUser } from '../../Utils'
import Prod from './Prod'

function Products({ cartItems, setCartItems }) {

  const [products, setProducts] = useState([])

  //fetch data from server!!!


  useEffect(async () => {
    const res = await API.get("/getAllProducts")
    setProducts(res.data.products)
  }, [])

  const addToCart =(carts) => {
    try {
      const exist = cartItems.find(x => x._id === carts._id)
      if (exist) {
        setCartItems(cartItems.map((cart) => cart._id === carts._id ? { ...cart, product_qty: cart.product_qty + 1 } : cart))
      } else {
        setCartItems([...cartItems, { ...carts, product_qty: 1 }])
      }
    } catch (e) {
      console.log(e.response.data)
    }
   // handleAddToCart(cartItems)
  }
  const handleAddToCart=async(cart)=>{
    const result = await API.post("/addToCart", { id: getUser()._id, cartItems: cart })
    console.log(result.data.user.cartItems)
  }



  return (
    <>
      <div className='w-[70rem] h-auto grid md:grid-cols-2 lg:grid-cols-3 border-[1px p-16'>
        {
          products.map(((prod, idx) => (
            <Prod key={idx} prod={prod} addToCart={addToCart} />
          )))
        }
      </div>
    </>
  )
}

export default Products