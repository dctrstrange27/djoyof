import React, { useEffect, useState } from 'react'
import { API, getUser, saveUser } from '../../Utils'
import Prod from './Prod'
function Products({ cartItems, setCartCount, cartItemsCount,setCartItems, setShowNotif }) {

  const [products, setProducts] = useState([])
  const [message, setMessage] = useState("Added Item 👍👍")
  //fetch data from server!!!
  useEffect(async () => {
    const res = await API.get("/getAllProducts")
    setProducts(res.data.products)
  }, [])

  const addToCart = async (cart) => {    
    cart.product_qty = 1   
    try {
      const cartItems = await API.post("/addToCart", {
        id: cart._id,
        item: cart,
        userID: getUser()._id,
        name: cart.product_name
      })
      setMessage(cartItems.data.message)
    } catch (e) {
      console.log(e)
    }
  }
  
  return (
    <>
      <div className='w-[70rem] h-auto grid md:grid-cols-2 lg:grid-cols-3 border-[1px p-16'>
        {
          products.map(((prod, idx) => (
            <Prod key={idx} message={message} prod={prod} cartItems={cartItems} setShowNotif={setShowNotif} addToCart={addToCart} />
          )))
        }
      </div>
    </>
  )
}

export default Products
