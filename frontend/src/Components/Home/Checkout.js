import React from 'react'
import {MdCheckBox} from 'react-icons/md'

function Checkout() {
  return (<>

     <div className='parent h-[50vh] w-full flex flex-col justify-center px-0 py-0 items-center'>
      <div className='left
         w-full h-full bg-gren-500 px-5 py-4 flex flex-col gap-3 text-sm font-nsans '>
         <img src={require('../../img/checkout_tag.png')} className='h-[33px] w-[144px]'></img> 
        <h1 className='font-bold tracking-wide'>PAYMENT METHOD</h1>
        <div className='COD flex justify-between'>
            <p>Cash on  Delivery</p>
            <MdCheckBox className='h-5 w-4'></MdCheckBox>
        </div>
        <div className='Gcash flex justify-between'>
            <p>Online payment/Gcash</p>
            <MdCheckBox className='h-5 w-4 text-[#BC5900]'></MdCheckBox>
        </div>
        <div className='Order-item flex justify-between'>
            <p>Order Total Items: </p>
            <p className='w-18 px-2 py-1 h-7 text-xs border-[1px] '>100 php </p>
        </div>
        <div className='Total-payment flex justify-between'>
            <p>Total Payment: </p>
            <p className='w-18 px-2 py-1 h-7 text-xs border-[1px]'>200 php </p>
        </div>
        <div className='button flex justify-center'>
            <button className='h-10 w-32 text-sm font-bold rounded-lg text-[#323232] bg-[#D98743]'>Place Order </button>
        </div>
    
      </div>
      <div className='right 
        w-full h-full  bg-gray-500'>
      <h1>Current Items</h1>
      </div>
   
     </div>
    
    
</>)}

export default Checkout