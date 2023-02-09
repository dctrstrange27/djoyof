import React from "react";
import Login from "./Components/Login/Login";
import NotFound from "./Components/error/NotFound";
import { Outlet } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react"
import Signupconfig from "./Components/Signup/Signupconfig";
import ForgotConfig from "./Components/forgotPassword/ForgotConfig";
import { ImSpinner10 } from 'react-icons/im'
import { API, userAPI, saveUser } from "../src/Utils";
import Contact from "./Components/ContactUs/Contact";
import Help from "./Components/Help/Help";
import Profile from "./Components/profile_setting/Profile";
import Settings from "./Components/profile_setting/Settings";
import Orders from "./Components/profile_setting/Orders";
import Profile_cart from "./Components/profile-cart/Profile_cart";
import Cart from "./Components/profile-cart/Cart";
import Service from "./Components/Service/Service";

const Products = React.lazy(() => import('./Components/Products/Products'))
const LazyMain = React.lazy(() => import('../src/Components/Home/Main'))
const Home = React.lazy(() => import('../src/Components/Home/Home'))
function App() {
    return (
        <Router>
            <MainApp />
        </Router>
    )
}
const MainApp = () => {
    let navigate = useNavigate();
    const [show, setShow] = useState(false);
    const [clickableAgain, setClickableAgain] = useState(true);
    const [proof, setProofFile] = useState();
    const [proofView, setProofView] = useState();
    const [togs, setTogs] = useState(false);
    const [check, setCheck] = useState(false)
    const [check2, setCheck2] = useState(false)
    const [showContinue, setShowCon] = useState(false)
    const [signout, setSignout] = useState(false)
    const [showNotif,setShowNotif] = useState(false)


    //Data related
    const [openTab, setOpenTab] = React.useState(1);
    const [userData, setUserData] = useState([]);
    const [userName, setUserName] = useState()
    const [useLocal, setUseLocal] = useState(false)
    const [useGoogle, setUseGoogle] = useState(false)
    const [currentTab, setCurrentTab] = useState()
    const [cartItems, setCartItems] = useState([])

    //error
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [loginForm, setLoginForm] = useState([
        {
            email: "",
            password: "",
        }
    ])

    const [signupForm, setSignupForm] = useState([
        {
            email: "",
            password: "",
            name: "",
            confirm_password: "",
        }
    ])

    const updateSetShow = () => {
        setShow(false)
    }

    const handleLogin = async (mod, data) => {
        // login existing user account
        try {
            if (mod == 1) {
                try {
                    const existingAccount = await userAPI.post("/login", {
                        email_address: data.email,
                        password: data.password,
                    })
                    setUserData(existingAccount)
                    saveUser(existingAccount)
                    navigate("/djoyof");
                    setError('')
                } catch (e) {
                    console.log(e.response.data.error_message);
                    setError(e.response.data.error_message);
                    setLoading(false)
                }
            }
            if (mod == 0) {
                try {
                    const newUser = await userAPI.post("/signup", {
                        email_address: data.email,
                        customer_name: data.name,
                        password: data.password,
                        confirm_password: data.confirm_password,
                    })
                    console.log(newUser);
                    saveUser(newUser);
                    setUserData(newUser);
                    setShowCon(true)
                    navigate('/Signin')
                    return
                } catch (e) {
                    console.log(e.response.data.error_message);
                    setError(e.response.data.error_message)
                    setLoading(false)
                }
            }
            if (mod == 2) {
                const loginGoogle = await userAPI.post("/login", {
                    email_address: data.email,
                    password: data.name,
                })
                setUserData(loginGoogle)
                saveUser(loginGoogle)
            }
            //new Account

        } catch (error) {
            console.log(error)
        }
    }


   
    return (
        <>
            <div className="dark:bg-five duration-500 bg-P_bg overflow-hidden invert-0">
                <Routes>
                    <Route path="/djoyof" element={
                        <React.Suspense fallback={<div className={`w-full h-screen dark:bg-four flex justify-center items-center`}>
                            <ImSpinner10 className="text-Ofive w-8 h-auto animate-spin  bg-transparent" ></ImSpinner10>
                        </div>} >
                            <Home    
                                showNotif={showNotif}
                                setShowNotif={setShowNotif}
                                cartItems={cartItems}
                                setLoading={setLoading}
                                loading={loading}
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
                                currentTab={currentTab}
                                setCurrentTab={setCurrentTab}
                            />
                        </React.Suspense>
                    }>
                        <Route path="Main" element={
                            <React.Suspense fallback={
                                <div className={`w-[70rem] h-screen dark:bg-four border-[1px flex justify-center items-center`}>
                                    <ImSpinner10 className="text-Ofive w-8 h-auto animate-spin " ></ImSpinner10>
                                </div>
                            }>
                                <LazyMain
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
                                />
                            </React.Suspense>
                        } />
                        <Route path="Products" element={
                            <React.Suspense fallback={<div className={`w-[70rem] h-screen dark:bg-four border-[1px flex justify-center items-center`}>
                                <ImSpinner10 className="text-Ofive w-8 h-auto animate-spin " ></ImSpinner10>
                            </div>}>
                                <Products setShowNotif={setShowNotif} cartItems={cartItems} setCartItems={setCartItems} />
                            </React.Suspense>
                        } /> 
                        <Route path="Contact" element={<Contact />} />
                        <Route path="Service" element={<Service />} />
                        <Route path="Help" element={<Help />} />
                        <Route path="Profile" element={<Profile />} />
                        <Route path="Settings" element={<Settings />} />
                        <Route path="Orders" element={<Orders />} />
                        <Route path="cart" element={<Cart  />} />
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

                    <Route path="recoverAccount" element={<ForgotConfig />} />

                    <Route path="Signin" element={
                        <Signupconfig
                            loginForm={loginForm}
                            setLoginForm={setLoginForm}
                            loading={loading}
                            setLoading={setLoading}
                            setError={setError}
                            error={error}
                            signupForm={signupForm}
                            setSignupForm={setSignupForm}
                            handleLogin={handleLogin}
                            userName={userName}
                            setUserName={setUserName}
                            userData={userData}
                            setUserData={setUserData}
                            showContinue={showContinue}
                            setShowCon={setShowCon} />} >
                        <Route path="login" element={<Login />} />
                        <Route path="Signup" element={<Login />} />
                    </Route>
                </Routes>
                <Outlet />
            </div>
        </>
    );
}

export default App;
