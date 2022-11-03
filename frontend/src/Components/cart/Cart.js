import React, { useEffect, useState } from "react";
import Checkout from "./Checkout";
import { IoAddSharp } from "react-icons/io5";
import { BiMinus } from "react-icons/bi";
import { FaTrashAlt } from "react-icons/fa";
import { ImCart } from "react-icons/im";
import { GoCheck } from "react-icons/go";
import { BsFillBackspaceFill } from 'react-icons/bs'
import { API, getUser, saveUser } from "../../Utils";

export const Cart = ({ proof,
  proofView,
  check,
  setCheck,
  check2,
  setCheck2,
  newOrders,
  showProofModal, setCartItems, cartItems, userData, newCartItems, loadUserData, cartTotal }) => {


  const [checkTab, setCheckTab] = React.useState(1);
  const [totalCost, setTotalCost] = useState(0.0);
  const [totalPay, setTotalPay] = useState(0.0);
  const [confirmCart, setConfirmCart]= useState([])
  const shippingFee = 20
  const TotalPayment = totalPay + shippingFee

  const removeToCart = (item) => {
    setCartItems(cartItems.filter(cart => cart._id !== item._id))
  }

  const increateQty = (id) => {
    setCartItems(cartItems.map((cart) => cart._id === id ? { ...cart, product_qty: cart.product_qty + 1 } : cart))
  };
  const decreaseQty = (id) => {
    const exist = cartItems.find(x => x._id == id)
    if (exist) {
      if (exist.product_qty <= 1) {
        return setCartItems(cartItems.filter((x) => x._id !== id))
      }
    }
    setCartItems(cartItems.map((cart) => cart._id === id ? { ...cart, product_qty: cart.product_qty - 1 } : cart))
  }
  const clearCart = () => {
    setCartItems([])
  }
  const confirmOrders =()=>{
    setConfirmCart([...cartItems])
  }

  useEffect(() => {
    var cost = 0;
    cartItems.forEach((i) => (cost += i.product_price * i.product_qty));
    setTotalCost(cost);
  }, [cartItems]);
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
              <a className="duration-200 font-bold tracking-[0.1em] font-NunitoSans  px-3 py-3"

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
                  proofView={proofView}
                  check={check}
                  setCheck={setCheck}
                  check2={check2}
                  setCheck2={setCheck2}
                  totalPay={totalPay}
                  shippingFee={shippingFee}
                  TotalPayment={TotalPayment}
                  newOrders={newOrders}
                  newCartItems={newCartItems}
                  cartItems={cartItems}
                  userData={userData}
                  loadUserData={loadUserData}
                  cartTotal={cartTotal}
                  showProofModal={showProofModal}
                  setCheckTab={setCheckTab}
                  confirmCart={confirmCart}
                  setConfirmCart={setConfirmCart}
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
