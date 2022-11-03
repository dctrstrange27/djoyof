import React from "react";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import About from "./Components/About/About";
import DarkMode from "./Components/DarkMode/DarkMode";
import NotFound from "./Components/error/NotFound";
import Service from "./Components/Service/Service";
import Contact from "./Components/ContactUs/Contact";
import Help from "./Components/Help/Help";
import Profile from "./Components/profile_setting/Profile";
import Settings from "./Components/profile_setting/Settings";
import Orders from "./Components/profile_setting/Orders";
// import Cart from "./Components/cart/Cart";
import Profile_cart from "./Components/profile-cart/Profile_cart";
import Cart from "./Components/profile-cart/Cart";
import Main from "./Components/Home/Main"
import { Outlet } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react"
import Signupconfig from "./Components/Signup/Signupconfig";
import ForgotConfig from "./Components/forgotPassword/ForgotConfig";

function App() {
    return (
        <Router>
            <MainApp />
        </Router>
    )
}
const MainApp=()=> {
    let navigate = useNavigate();
    const [show, setShow] = useState(false);
    const [clickableAgain, setClickableAgain] = useState(true);
    const [proof, setProofFile] = useState();
    const [proofView, setProofView] = useState();
    const [togs, setTogs] = useState(false);
    const [check, setCheck] = useState(false)
    const [check2, setCheck2] = useState(false)
    const [showContinue, setShowCon] = useState(false)
    
    //Data related
    const [openTab, setOpenTab] = React.useState(1);
    const [userData, setUserData] = useState([]);
    const [userName, setUserName] = useState()
    const [login, setLogin] = useState(false)
    const [useGoogle, setUseGoogle] = useState(false)
    const [useLocal, setUseLocal] = useState(false)
    const [currentTab, setCurrentTab] = useState()
    const [cartItems,setCartItems] = useState([])
  


    const updateSetShow = () => {
        setShow(false)
    };

    const [user, setUser] = useState([])
    const [signout, setSignout] = useState(false)


    return (
        <>
            <div className="dark:bg-five duration-500 bg-P_bg overflow-hidden invert-0">
           
                <Routes>
                    <Route path="/" element={ <Home
                            updateSetShow={updateSetShow}
                            setProofFile={setProofFile}
                            proofView={proofView}
                            setProofView={setProofView}
                            show={show}
                            setShow={setShow}
                            userData={userData}
                            togs={togs}
                            setTogs={setTogs}
                            setUseGoogle={setUseGoogle}
                            setUseLocal={setUseLocal}
                            signout={signout}
                            setSignout={setSignout}
                            currentTab={currentTab} setCurrentTab={setCurrentTab}
                        />}>
                        <Route path="djoyof" element={<Home />} />
                        <Route path="About" element={<About />} />
                        <Route path="Main" element={
                            <Main
                                cartItems={cartItems}
                                setCartItems={setCartItems}
                                check={check}
                                proof={proof}
                                setCheck={setCheck}
                                check2={check2}
                                setCheck2={setCheck2}
                                openTab={openTab}
                                setOpenTab={setOpenTab} 
                                clickableAgain={clickableAgain}
                                userData={userData}
                                useLocal={useLocal}
                                useGoogle={useGoogle}
                                setUseGoogle={setUseGoogle}
                                showProofModal={() => {
                                    setShow(true);
                                }}
                            />} />
                        <Route path="Service" element={<Service />} />
                        <Route path="Contact" element={<Contact />} />
                        <Route path="Help" element={<Help />} />    
                        <Route path="Profile" element={<Profile />} />
                        <Route path="Settings" element={<Settings />} />
                        <Route path="Orders" element={<Orders />} />
                        {/* <Route path="Cart" element={<Cart />} /> */}
                        <Route path="cart" element={<Cart />} />
                        <Route path="profile-cart"
                             element={<Profile_cart  
                             currentTab={currentTab} 
                             setCurrentTab={setCurrentTab}
                             cartItems={cartItems}
                             setCartItems={setCartItems}
                             />} />
                        <Route path="Cart/profile-cart" element={<Cart />} />
                        <Route path="profile-cart/Profile" element={<Profile />} />
                        <Route element={<NotFound />} />
                    </Route>
                    
                    <Route path="Login" element={<Login
                           setLogin={setLogin}
                           setUserData={setUserData}
                           userData={userData}
                           login={login}
                           user={user}
                           setUser={setUser}
                           useGoogle={useGoogle}
                           setUseGoogle={setUseGoogle}
                           setUseLocal={setUseLocal}
                           useLocal={useLocal}
                          />} />
                    <Route path="recoverAccount" element={<ForgotConfig />} />
                    <Route path="Signup" element={
                        <Signupconfig
                        userName={userName}
                        setUserName={setUserName}
                        userData={userData}
                        showContinue={showContinue}
                        setShowCon={setShowCon}
                        />} />
                     {/* <Route path="loading" element={<Loading />}  />  */}
                    <Route path="DarkMode" element={<DarkMode />} />
                </Routes>
                <Outlet />
            </div>
        </>
    );
}

export default App;
