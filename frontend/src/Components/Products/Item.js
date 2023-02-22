import React from 'react'
import Prod from './Prod'
const Item = ({message, products, cartItems, setShowNotif, addToCart}) => {
  return (
    <div className='Products grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 border-[1px border-[#fff] px-8 py-8 md:pl-16 lg:px-16'>
    {
      products.map(((prod, idx) => (
        <Prod key={idx} message={message} prod={prod} cartItems={cartItems} setShowNotif={setShowNotif} addToCart={addToCart} />
      )))
    }
  </div>
  )
}

export default Item