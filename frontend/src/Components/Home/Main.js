import React from 'react'
import Tabs from '../tabs/Tabs'
import Cart from '../cart/Cart';
import { useEffect } from 'react';
import { useState } from 'react';
const Content = ({ setShow,proofView,check,setCheck,check2,setCheck2,deleteNewCartItems,deleteOrder, getAllCarts,newCartItems,setOnConfirm, onRemoveAll, openTab, products, setOpenTab, onAdd, addFavorite, removeFavorite, isMyFavorite, clickableAgain, cartItems,showProofModal,onRemove,onDecrease,onIncrease }) => {

  return (
    <>
      <div className=" border-pink-700 w-full flex flex-col border-[1px px-5  justify-center 
                        items-center min-h-screen overflow-x-hidden scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-black
                           md:w-[700px] md:max-w-[700px]
                           lg:w-[860px] lg:max-w-[900px]
                           xl:w-[1100px] xl:max-w-[1200px]
                      
                      ">
        <Tabs
          openTab={openTab}
          products={products}
          setOpenTab={setOpenTab}
          onAdd={onAdd}
          addFavorite={addFavorite}
          removeFavorite={removeFavorite}
          isMyFavorite={isMyFavorite}
          clickableAgain={clickableAgain}
        />
        <Cart
          proofView={proofView}
          check={check}
          setCheck={setCheck}
          check2={check2}
          setCheck2={setCheck2}
          deleteNewCartItems={deleteNewCartItems}
          deleteOrder={deleteOrder}
          getAllCarts={getAllCarts}
          newCartItems={newCartItems}
          setOnConfirm={setOnConfirm}
          onAdd={onAdd}
          onDecrease={onDecrease}
          onIncrease={onIncrease}
          cartItems={cartItems}
          onRemove={onRemove}
          onRemoveAll={onRemoveAll}
          products={products}
          showProofModal={showProofModal}
          setShow={setShow}
          >
        </Cart>
       
      </div>

    </>

  )
}

export default Content