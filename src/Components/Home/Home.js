import { useState } from 'react';
import React from 'react'
import Data from '../Home/Data';
import Product from './Product';
import Cart  from './Cart';

export const Home = () => {
  const [openTab, setOpenTab] = React.useState(1);

  const { products } = Data;
  const [cartItems, setCartItems] = useState([]);

  const onAdd =(product)=>{
       const exist = cartItems.find(x => x.id == product.id)
        if(exist){
          setCartItems(cartItems.map((x) => x.id == product.id ? {...exist, qty: exist.qty + 1} : x))
        }else{
          setCartItems([...cartItems,{...product, qty: 1}])

        }
  }

 
  return ( 
    <>
      {/* border-[#F29A4B] border-[1px] */}
      <div className="bg-[#24262B] w-full h-auto">


        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@300&family=Poppins:wght@100;200;300;400&display=swap" rel="stylesheet"></link>
        <div className='flex'>
          <aside class="w-16 h-auto bg-transparent border-[#fffff] border-r-[.01px] " aria-label="Sidebar">
            <div class="py-6 px-3 flex justify-center items-center rounded">
              <ul class="space-y-2">
                <li>
                  <a href="#" class="flex justify-center items-center font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                    <img src={require('../../img/mb_logo.png')} className='h-auto w-[50px] max-w-[90%] m md:max-w-[20%]  '></img>
                  </a>
                </li>
                <li class="py-4">
                  <a href="#" class="flex justify-center items-center font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                    <img src={require('../../img/search.png')} className='h-auto w-[50px] max-w-[90%] m md:max-w-[20%]  '></img>
                  </a>
                </li>
                <li class="py-0">
                  <a href="#" class="flex justify-center items-center font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                    <img src={require('../../img/home.png')} className='h-auto w-[50px] max-w-[90%] m md:max-w-[20%]  '></img>
                  </a>
                </li>
                <li class="py-4">
                  <a href="#" class="flex justify-center items-center font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                    <img src={require('../../img/cart.png')} className='h-auto w-[50px] max-w-[90%] m md:max-w-[20%]  '></img>
                  </a>
                </li>
                <li class="py-0">
                  <a href="#" class="flex justify-center items-center font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                    <img src={require('../../img/fav.png')} className='h-auto w-[50px] max-w-[90%] m md:max-w-[20%]  '></img>
                  </a>
                </li>
                <div class="py-10">
                  <a href="#" class="flex justify-center items-center font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                    <img src={require('../../img/text.png')} className='h-auto w-[50px] max-w-[40%] m md:max-w-[20%]  '></img>
                  </a>
                </div>


                <li>
                  {/* <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                  <svg class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path><path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path></svg>
                  <span class="flex-1 ml-3 whitespace-nowrap">Inbox</span>
                  <span class="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200">3</span>
                </a> */}
                </li>

              </ul>
            </div>
          </aside>
          <div className='w-full'>
            <nav class="flex justify-center space-x-4 py-5">
              <a href="/" class="text-sm px-3 py-2 text-white rounded-lg hover:bg-slate-100 hover:text-slate-900">Home</a>
              <a href="/" class="text-sm  px-3 py-2 text-white rounded-lg hover:bg-slate-100 hover:text-slate-900">About</a>
              <a href="/" class="text-sm px-3 py-2 text-white rounded-lg hover:bg-slate-100 hover:text-slate-900">Service</a>
              <a href="/" class="text-sm px-3 py-2 text-white rounded-lg hover:bg-slate-100 hover:text-slate-900">Contact Us</a>
              <a href="#" class="flex justify-center items-center font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <img src={require('../../img/logo.png')} className='h-auto w-12'></img>
              </a>
            </nav>
            <div className="flex flex-wrap py-4 px-4">
              <div className="w-full">
                <ul
                  className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
                  role="tablist"
                >
                  <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                    <a className={
                      "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                      (openTab === 1
                        ? "text-black bg-[#F29A4B] 600" : "text-white -600 bg-transparent")
                    }
                      onClick={e => {
                        e.preventDefault();
                        setOpenTab(1);
                      }}
                      data-toggle="tab"
                      href="#link1"
                      role="tablist"
                    >
                      All
                    </a>
                  </li>
                  <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                    <a
                      className={
                        "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                        (openTab === 2
                          ? "text-black bg-[#F29A4B] 600" : "text-white -600 bg-transparent")
                      }
                      onClick={e => {
                        e.preventDefault();
                        setOpenTab(2);
                      }}
                      data-toggle="tab"
                      href="#link2"
                      role="tablist"
                    >
                      favorites
                    </a>
                  </li>
                  <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                    <a
                      className={
                        "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                        (openTab === 3
                          ? "text-black bg-[#F29A4B] 600" : "text-white -600 bg-transparent")
                      }
                      onClick={e => {
                        e.preventDefault();
                        setOpenTab(3);
                      }}
                      data-toggle="tab"
                      href="#link3"
                      role="tablist"
                    >
                      Completed
                    </a>
                  </li>
                  <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                    <a
                      className={
                        "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                        (openTab === 4
                          ? "text-black bg-[#F29A4B] 600" : "text-white -600 bg-transparent")
                      }
                      onClick={e => {
                        e.preventDefault();
                        setOpenTab(4);
                      }}
                      data-toggle="tab"
                      href="#link3"
                      role="tablist"
                    >
                      Cancelled
                    </a>
                  </li>
                </ul>
                <div className="font-pop flex rounded-md text-white   bg-[#141517] h-auto max-h-[50vh] w-full">
                  {/* ALL tab  */}
                  <div className="px-4 py-5 pl-10 pb-[8vh] flex-auto scrollbar-thin scrollbar scrollbar scrollbar-thumb-zinc-600 scrollbar-track-black
                          overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
                    <div className="tab-content tab-space relative">
                      <div className={openTab === 1 ? "block" : "hidden"} id="link2">
                        {products.map((product) => (
                        <Product key={product.id} onAddCart={onAdd} product={product}  ></Product>
                        ))}
                      </div>

                      <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                        <p>
                          Favorites..
                        </p>
                      </div>
                      <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                        <p>
                          Completed Items..
                        </p>
                      </div>
                      <div className={openTab === 4 ? "block" : "hidden"} id="link3">
                        <p>
                          Cancelled Items..
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Cart  onAdd={onAdd} cartItems={cartItems}></Cart> 
       
          </div>

        </div>
      </div>


    </>
  )
}
export default Home

// const companies = [
//   {name: "Company One", category: "Finance", start: 1981, end: 2004 },
//   {name: "Company Two", category: "Retail", start: 1992, end: 2008 },
//   {name: "Company Three", category: "Auto", start: 1999, end: 2007 },
//   {name: "Company Four", category: "Retail", start: 1989, end: 2010 },
//   {name: "Company Five", category: "Technology", start: 2009, end: 2014 },
//   {name: "Company Six", category: "Finance", start: 1987, end: 2010 },
//   {name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
//   {name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
//   {name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
// ];

// const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
// //forEach
//  for (let i = 0; i < companies.length; i++){
//    console.log(companies[i]);
//   }

// companies.forEach(function(company){
//   console.log(company)
// });

// companies.forEach((a) => {
//   console.log(a)
// })

// companies.forEach(a => console.log(a.name))

// filter



// const b = ages.filter( a  => {
//     if(a >= 21){
//       return true;
//     }
// })
// const candrink = ages.filter(function(a){
//   if(a >= 21){
//     return true;
//   }
// })

// console.log(candrink)




// const x = companies.filter( a => a.category === "Retail")
// console.log(x)
// console.log(companies.length)
// for(let a = 0; a < companies.length; a++){
//   let b = 0;
//   if( companies[a].category === "Retail"){
//     console.log(companies[a])
//     b += companies[a].end - companies[a].start
//     console.log("this is the gap between years ",b)
//   }    
// }

// for (let x = 0; x < companies.length; x++){
//     if(companies[x].category === "Auto" && companies[x].end - companies[x].start <= 10){
//       console.log(companies[x])
//     }

//   }


// const y = companies.filter((a) => (a.start >= 1980 && a.start <= 1990))

// console.log(y)

// let map = new Map;


// let nums = [2,4,5,6,7]
// let target = 7


// // O(n) - One-pass Hash Table
// var twoSum = (nums, target)=> {
//   let map = new Map;
//     for (var i = 0; i < nums.length; i++) {
//       let complement = target - nums[i];
//       if (map.has(complement)) {
//           return [map.get(complement), i]
//       }
//       map.set(nums[i], i);
//   }
// }

// console.log(twoSum(nums,target))

// const a = nums.forEach((x)=> {
//       let y = []
//       y.push(x % x.length)
//     console.log(y)
// })

// for(let x = 0; x < nums.length; x++){
//     let a = []
//     a.push(x % x.length)
//     console.log(a)

// }








// const Totalyears = companies.reduce( (t,c)=> {
//   return t + (c.end - c.start)
// })

// let a = 0;

// for(let x = 0; x < ages.length; x++){
//   a += ages[x]
// }


//reduce

// const totalYears = companies.reduce((total,comp) => total + (comp.end - comp.start), 0);
// console.log(totalYears);




// function sing(callback){
//   console.log("la la la la ")
//   if(callback){
//     callback()
//   }
// }
// function meow(){
//   console.log("meow meow")
// }

// sing() 
// sing(meow)

let val = [14, 43, 43, 54];

// function doubler(x){
//   return  x * 2;
// }
// let x = val.map(x => x * 2)

// const newVal = val.map(x => Math.floor(Math.random() * 10))
// console.log(newVal)

//  let arr = new Array(50)
//  arr = arr.fill().map(x => Math.floor(Math.random() * 10)).reduce((x,y) => {
//     if (y > x) {
//       x = y
//     }
//     return x;
//   })
//  console.log(arr)







// function multiplier(factor){
//     return x => x * factor;
// }

// function multi(factor){
//   return function(x){
//     return x * factor;
//   }
// }

// let doubler =  multi(2)
// let tripler =  multiplier(3)

// console.log(doubler(2));
// console.log(doubler(4));

// let vals = [
//   {
//     x: 5,
//     y: 10
//   },
//   {
//     x: 5,
//     y: 2
//   }

// ]



// function compare(a,b){
//   return a.y - b.y;
// }

// console.log(vals)
// vals.sort(compare)
// console.log(vals)
