import React, { useState } from 'react'
import Tabs from '../tabs/Tabs'
import Cart from '../cart/Cart';
import { useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { googleUserAPI,userAPI,API,saveUser,amIloggedIn, userGoogleAPI, getUser } from '../../Utils';

const Main = ({proof,setShow,proofView,check,setCheck,check2,setCheck2,setOnConfirm, onRemoveAll, openTab, products, setOpenTab, addFavorite, removeFavorite, isMyFavorite, clickableAgain,
              showProofModal,useGoogle,setUseGoogle ,useLocal ,cartItems,setCartItems

            }) => {
  
  
  
  const [userData,setUserData] = useState([])
  const [favorites,setFavorites] = useState([])
  const [cartTotal,setCartTotal] =useState()
  
  const navigate = useNavigate()


  const loadUserData = async () => {
        const userData = amIloggedIn(navigate);
        const userInfo = await userAPI.post("/getUserDetails", {
            _id: userData._id,
        });
        localStorage.getItem("userData", JSON.stringify(userInfo))
        
        saveUser(userInfo);
        setUserData(userInfo.data.userData);
        setCartItems(userInfo.data.userData.cartItems);
        setFavorites(userInfo.data.userData.favorites);     
  };

  const loadGoogleUserData = async () => {
    try {
      const userData = amIloggedIn(navigate);
      const userInfo = await userGoogleAPI.post("/getGoogleUserDetails", {
        _id: userData._id,
    });
 
    localStorage.getItem("userData", JSON.stringify(userInfo))
    
    saveUser(userInfo);
    setUserData(userInfo.data.userData);
    setCartItems(userInfo.data.userData.cartItems);
    setFavorites(userInfo.data.userData.favorites);     
    } catch (error) {
      console.log(error)
    }
};
  useEffect(() => {
    useLocal && loadUserData()
  }, [check2]);

  useEffect(()=>{
    useGoogle && loadGoogleUserData()
  },[useGoogle])


  const addToCart = (prod)=>{
      const exist = cartItems.find(p => p._id === prod._id) 
      if(exist){
          setCartItems(cartItems.map((cart)=> cart._id === prod._id ?{...cart,product_qty: cart.product_qty + 1}: cart ))
      }else{
        setCartItems([...cartItems,{...prod,product_qty: 1}])
      }
  }
return (
    <>
      <div className=" border-pink-700 flex flex-col px-5  
                        items-center min-h-screen overflow-x-hidden scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-black
                           min-w-[500px] 
                           lg:w-[860px] lg:max-w-[900px]
                           xl:w-[1100px] xl:max-w-[1200px] ">
        <Tabs
          openTab={openTab}
          products={products}
          setOpenTab={setOpenTab}
          onAdd={addToCart}
          addFavorite={addFavorite}
          removeFavorite={removeFavorite}
          isMyFavorite={isMyFavorite}
          clickableAgain={clickableAgain}
        />
        <Cart
          userData={userData}
          proof={proof}
          proofView={proofView}
          check={check}
          setCheck={setCheck}
          check2={check2}
          setCheck2={setCheck2}
          setOnConfirm={setOnConfirm}
          onAdd={addToCart}
          cartTotal={cartTotal}
          loadUserData={loadUserData}
          cartItems={cartItems}
          setCartItems={setCartItems}
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

export default Main