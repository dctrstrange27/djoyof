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
  const [search, setSearch] = useState()

 // const debounce = useDebounceVal(search)


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
 const handleSearchFilter=async(prod_name)=>{
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
  },[search])

  return (
    <div className='flex flex-col min-w-[475px] md:min-w-[768px] lg:min-w-[1024px] xl:min-w-[1280px] border-[1px border-[#fff]'>
      <div className="flex p-3 bg-four rounded-lg mx-2 my-4 md:mx-8 lg:mx-16 border-[1px">
        <BiSearchAlt2 className="w-6 h-auto text-[#6e6c6c]" />
        <input className="w-full px-2 bg-[#fff0] outline-none dark:text-[#fff]" type="text" name="search" value={search} placeholder='Search' 
          onChange={(e)=> setSearch(e.target.value)}
        />
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Item message={message} products={products} cartItems={cartItems} setShowNotif={setShowNotif} addToCart={addToCart} />
      </Suspense>
      {/* <div className=" border-[10px border-[#Fff] flex flex-col px-9  items-center min-h-screen overflow-x-hidden scrollbar-thin
                           min-w-[500px] 
                           lg:w-[860px] lg:max-w-[900px]
                           xl:w-[1100px] xl:max-w-[1200px] ">
        <div className="w-lg mt-10 border-[1px grid grid-cols-1 md:grid-cols-2 gap-5 ">
          <div className='flex flex-col justify-center gap-3 mr-5'>
            <h2 className="text-[#F29A4B] font-nsans text-2xl xl:text-[3rem] drop-shadow-lg italic font-extrabold lg:tracking-[.4rem] text-left w-[250px] lg:w-[340px] xl:w-[340px] border-[1px">DJOYOF</h2>
            <h1 className="font-nsans font-black text-[#636262] tracking-widest drop-shadow-lg  xl:tracking-[2rem] lg:tracking-[1.5rem] text-5xl xl:text-[3.5rem] border-[1px ">BAKING</h1>
            <p className="text-justify font-pop mt-3 dark:text-[#CFCFCF] text-[#575555]  tracking-wider text-sm ">
              DJOYOFBAKING is founded by Ms. Dimple Cuevas.
              <br></br>
              <br></br>
              DJOYOFBAKING is a small sole proprietorship business which cater and promotes fresh baked home local and international breads.
              <br></br>
              <br></br>
              The DJOYOFBAKING bakery is located at Blk 12 Lot 39 Birmingham Village Brgy Pulo Cabuyao Laguna.</p>
            <div className="flex justify-center items-center mt-5">
              <Link to='/login' className="bg-orange-700 ease-in-out border-[#F29A4B] duration-300 hover:scale-105 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-blue-300 border-[1px] 
                                font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-orange-400 dark:hover:bg-orange-500 dark:focus:ring-orange-800 ">
                <ImCart className="h-4 w-4 mr-3  dark:text-[#CFCFCF]"></ImCart>
                <button type="submit" className={`px-2  w-ful text-two dark:text-[#fff] rounded-md py-2`}>ORDER NOW </button>
              </Link>
            </div>
          </div>
          <div className=''>
            <img src={require("../../img/picture.jpg")} className='w-lg rounded-xl h-auto shadow-xl shadow-[#3433335d]'></img>
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default Products
