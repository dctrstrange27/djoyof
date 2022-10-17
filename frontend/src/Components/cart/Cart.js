import React, { useEffect, useState } from "react";
import Checkout from "./Checkout";
import { IoAddSharp } from "react-icons/io5";
import { BiMinus } from "react-icons/bi";
import { FaTrashAlt } from "react-icons/fa";
import { ImCart } from "react-icons/im";
import { GoCheck } from "react-icons/go";
import { BsFillBackspaceFill } from 'react-icons/bs'


export const Cart = ({proof,onPlaceOrder,proofView,check,setCheck,check2,setCheck2,deleteOrder, deleteNewCartItems, newOrders, newCartItems, getAllCarts, products, cartItems, onIncrease, onDecrease, onRemove, onRemoveAll, showProofModal }) => {
  const [checkTab, setCheckTab] = React.useState(1);
  const [totalCost, setTotalCost] = useState(0.0);
  const [totalPay, setTotalPay] = useState(0.0);
  const shippingFee = 20
  const TotalPayment = totalPay + shippingFee

  useEffect(() => {
    var cost = 0;
    cartItems.forEach((i) => (cost += i.product_price * i.product_qty));
    setTotalCost(cost);
  }, [cartItems]);

  useEffect(() => {
    var cost = 0;
    newCartItems.forEach((i) => (cost += i.product_price * i.product_qty));
    setTotalPay(cost);
  }, [newCartItems]);
  return (
    <>
      <div className="flex w-full border-[1px mt-4 pb-20 flex-wrap justify-center">
        <div className="flex flex-col border-[1px border-red-500 px-2 w-full text-Light_normal ">
          {/* tab  */}
          <ul className="flex mb-0 text-[15px] list-none overflow-hidden overflow-y-hidden flex-wrap space-x-5 pt-3 pb-4 flex-row"
            role="tablist">
            <li onClick={(e) => {
                  e.preventDefault();
                  setCheckTab(1);
                  console.log(checkTab)
                }} 
                data-toggle="tab"
                href="#link2"
                role="tablist" 
                className={"w-[90px] border-[1px -mb-px mr-2 last:mr-0 text-center items-center ease-linear duration-[1ms] dark:hover:text-[#fb9a46] flex max-h-10 rounded-xl dark:text-[#F29A4B] text-[#F29A4B]" + (checkTab === 1 ? "dark:text-[#F29A4B] text-[#F29A4B]" : " dark:text-[#d2d2d2] text-Light_normal dark: -600 bg-transparent")}>
              <a className = "duration-200 font-bold tracking-[0.1em] font-NunitoSans  px-3 py-3"
              
              >
                Cart
              </a>
              <div className="flex justify-center items-center ">
                <ImCart className="w-4 h-4" />
              </div>
            </li>
            <li className={"-mb-px mr-2 last:mr-0 text-center items-center  ease-linear  duration-[1ms] dark:hover:text-[#fb9a46] flex max-h-10 rounded-xl bg" + (checkTab === 2 ? "dark:text-[#F29A4B] text-[#F29A4B]" : " dark:text-[#d2d2d2] text-Light_normal dark: -600 bg-transparent")}>
              <a
                className={
                  " duration-200 font-bold  tracking-[0.1em] font-NunitoSans px-3 py-3 "}
                onClick={(e) => {
                  e.preventDefault();
                  setCheckTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                Checkout
              </a>
              <div className="flex justify-center items-center ">
                <GoCheck className="w-6 h-6" />
              </div>
            </li>
          </ul>
          <div className=" bg-Tabs_bg border-[1px dark:bg-[#242526e0]   shadow-lg shadow-[#00000069] border-[1px rounded-2xl md:rounded-2xl md:px-0 font-pop flex justify-center items-center text-white">
            <div className="rounded-md md:px-5 py-3 flex-auto border-[1px">
              <div className={checkTab === 1 ? "block" : "hidden"} id="link1">
                <div className="flex justify-between items-center border-b-[0.1rem] my-8">
                  <p className="text-[15px] md:text-sm font-semibold dark:text-[#fff] py-2">Current Order</p>
                  <button
                    onClick={() => {
                      // kunwari lang to di pa final HAHA
                      onRemoveAll();

                    }}
                    className={
                      "text-xs group-hover:animate-pulse text-[#000000] rounded-[8px] py-2 px-3.5 bg-[#FFCB9D]"
                    }
                  >
                    Clear All
                  </button>
                </div>
                {cartItems.length === 0 ? (
                  <p className="text-center mt-4 text-xs text-gray-400 font-Poppins">
                    No Items On Cart
                  </p>
                ) : (
                  <>
                    {/* fields */}
                    <div className="cart text-xs font-pop dark:text-[#fff]">
                      <div className=" md:text-sm font-bold py-2 grid grid-cols-8 w-full  justify-items-center text-center items-center">
                        <div className="Items">Items</div>
                        <div className="name col-span-2">Name</div>
                        <div className="review">review</div>
                        <div className="quantity w-[50px] col-span-2">quantity</div>
                        <div className="delete">delete</div>
                        <div className="price">price</div>
                      </div>
                      <div className="items">
                        {cartItems.map((i, idx) => (
                          <div key={idx} className="grid mt-2 bg-product_lbl_bg dark:bg-[#0a0a0a62] font-light text-[#000] font-nsans dark:text-[#fff] grid-cols-8 text-sm text-center items-center justify-items-center">
                            <img src={i.image} className=" bg-product_bg h-auto min-w-10 w-12 max-w-12"></img>
                            <h3 className="col-span-2">{i.product_name}</h3>
                            <p>review</p>
                            <div className="quantity flex col-span-2 gap-4">
                              <button onClick={() => onDecrease(i)}>  
                                <BiMinus className="col-span-1  h-auto w-3  md:h-6 md:w-[1rem] text-orange-600" />
                              </button>
                              <p>{i.product_qty}</p>
                              <button onClick={() => onIncrease(i)}>
                                <IoAddSharp className="col-span-1 h-auto w-3 md:h-6 md:w-[1rem] text-orange-600" />
                              </button>
                            </div>
                            <button onClick={() => onRemove(i)} className="bg-light_del_btn dark:bg-dark_del_btn p-1  md:p-2 rounded-md">
                              <FaTrashAlt className="text-neutral-50 text-[#fff]" />
                            </button>
                            <p>${i.product_price}</p>
                          </div>
                        ))}
                      </div>
                      <div className="py-2 grid grid-cols-8 border-[1px text-center">
                        <div >Total: </div>
                        <div className="total col-span-6"></div>
                        <div className="">${totalCost}</div>
                      </div>
                      <div className="py-2 grid grid-cols-8 border-[1px text-center">
                        <div className="total col-span-6 md:col-span-6 lg:col-span-7"></div>
                        <button onClick={() => {
                          getAllCarts(cartItems)
                          setCheckTab(2)
                        }}
                          className={"text-sm col-span-2 lg:col-span-1  group-hover:animate-pulse font-medium text-[#000000] rounded-[8px] py-1 bg-[#FFCB9D]"}>
                          Confirm Orders
                        </button>
                      </div>
                    </div>
                    {/* //current item */}
                    <div className="mt-4 flex items-center justify-between">

                    </div>
                  </>
                )}
              </div>
              <div className={`relative border-[1px  ${checkTab === 2 ? "block" : "hidden"} `} id="link1">

                <div className="w-full h-7 border-[1px flex justify-between">
                <img
                        src={require("../../img/checkout_tag.png")}
                        className="h-[33px] w-[144px]"
                    ></img>
                  <BsFillBackspaceFill onClick={() => setCheckTab(1)} className=" h-7 w-7 right-2 inset-y-3 hover:text-[#19978a] hover:h-8 hover-w-8 hover:-translate-y-1  text-[#088074]"></BsFillBackspaceFill >
                </div>

                <Checkout 
                    proof={proof}
                    onPlaceOrder={onPlaceOrder}
                    proofView={proofView} 
                    check={check}
                    setCheck={setCheck}
                    check2={check2}
                    setCheck2={setCheck2} 
                    totalPay={totalPay} 
                    shippingFee={shippingFee} 
                    TotalPayment={TotalPayment} 
                    deleteNewCartItems={deleteNewCartItems} 
                    deleteOrder={deleteOrder} 
                    newOrders={newOrders} 
                    newCartItems={newCartItems} 
                    cartItems={cartItems} 
                    onRemove={onRemove} 
                    products={products} 
                    showProofModal={showProofModal}
                    setCheckTab={setCheckTab}
                    ></Checkout>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Cart;
