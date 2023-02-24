import React, { useDebugValue, useEffect, useState } from 'react'
import { API, getUser } from '../../Utils'
import Prod from './Prod'
import { BiSearchAlt2 } from 'react-icons/bi'
import { lazy, Suspense } from 'react';
const Item = lazy(()=> import('./Item'))

 function useDebounceVal(value, time = 250){
  
  const [debounce,setDebounce] = useState(value)

  useEffect(()=>{
    const timeout = setTimeout(()=>{
      setDebounce(value);
    },time)

    return () =>{
      clearTimeout(timeout);
    }
  },[value,time])
  return debounce;
 }

function Products({ cartItems, setShowNotif }) {

  const [products, setProducts] = useState([])
  const [message, setMessage] = useState("Added to Cart ")
  const [search, setSearch] = useState("")
  

 

  //const debounce = useDebounceVal(search)
  //fetch data from server!!! 
  const addToCart = async (cart) => {
    cart.product_qty = 1
    try {
      const cartItems = await API.post("/addToCart", {
        id: cart._id,
        item: cart,
        userID: getUser()._id,
        name: cart.product_name
      })
      console.log(cartItems.data.cart)
      setMessage("Added " + cartItems.data.cart)
    } catch (e) { 
      console.log(e)
    }
  }
 const handleSearchFilter = async(prod_name)=>{
  const res = await API.get("/getAllProducts")
    if(!prod_name){
      setProducts(res.data.products)
    }else{
      const data = res.data.products
      const filter = data.filter((prod)=> prod.product_name == prod_name)
      setProducts(filter) 
    }
  }
  useEffect(async()=>{
    handleSearchFilter(search)
    // console.log(search)
  },[search])

  return (
    <div className='flex flex-col min-w-[475px] md:min-w-[768px] lg:min-w-[1024px] xl:min-w-[1280px] border-[1px border-[#fff]'>
      <div className="flex p-3 bg-[#ffffff] dark:shadow-lg shadow-lg shadow-Light_shadow dark:shadow-[#1b1a1a41] dark:bg-four rounded-lg mx-2 my-4 md:mx-8 lg:mx-16 border-[1px">
        <BiSearchAlt2 className="w-6 h-auto text-[#6e6c6c]" />
        <input className="w-full px-2 bg-[#fff0] outline-none dark:text-[#fff]" type="text" name="search" value={search} placeholder='Search Products' 
          onChange={(e) => setSearch(e.target.value)} 
        />
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Item message={message} products={products} cartItems={cartItems} setShowNotif={setShowNotif} addToCart={addToCart} />
      </Suspense>
    </div>
  )
}

export default Products
