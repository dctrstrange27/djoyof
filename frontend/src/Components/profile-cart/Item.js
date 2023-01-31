import React from 'react'

const Item = ({item}) => {
    console.log(item.product_name)
  return (
    <div>
        <h1 className='text-[#FFF] '>{item.product_name}</h1>
        <p className='text-[#FFF] '>{item.product_price}</p>
        <p className='text-[#FFF] '>{item.product_qty}</p>
    </div>
  )
}

export default Item