import React from "react";
import Login from "./Components/Login/Login";
import About from "./Components/About/About";

import NotFound from "./Components/error/NotFound";

import { Outlet } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react"
import Signupconfig from "./Components/Signup/Signupconfig";
import ForgotConfig from "./Components/forgotPassword/ForgotConfig";
import { AiOutlineLoading } from 'react-icons/ai'
import { ImSpinner10 } from 'react-icons/im'
import { API, userAPI, saveUser, rememberMe, getRemembered, userGoogleAPI, getUser } from "../src/Utils";
import Contact from "./Components/ContactUs/Contact";
import Help from "./Components/Help/Help";
import Profile from "./Components/profile_setting/Profile";
import Settings from "./Components/profile_setting/Settings";
import Orders from "./Components/profile_setting/Orders";
import Profile_cart from "./Components/profile-cart/Profile_cart";
import Cart from "./Components/profile-cart/Cart";
import { GiLogicGateNand } from "react-icons/gi";

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
    //Data related
    const [openTab, setOpenTab] = React.useState(1);
    const [userData, setUserData] = useState([]);
    const [userName, setUserName] = useState()
    const [login, setLogin] = useState(false)
    const [useLocal, setUseLocal] = useState(false)
    const [useGoogle, setUseGoogle] = useState(false)
    const [currentTab, setCurrentTab] = useState()
    const [cartItems, setCartItems] = useState([])

    //error
    const [error, setError] = useState('')


    const [data, setData] = useState([
        {
            password: "",
            email_address: "",
            customer_name: "",
            address: "",
            confirm_password: "",
            contact_no: ""
        }
    ])

    const updateSetShow = () => {
        setShow(false)
    }
    const handleLogin = async (mod, data) => {
        // login existing user account
        console.log(data)
        try {
            if (mod == 1) {
                const existingAccount = await userAPI.post("/login", {
                    email_address: data.email_address,
                    password: data.password,
                })
                setUserData(existingAccount)
                saveUser(existingAccount)
                //if (remember) rememberMe(email_address, password)
                navigate("/djoyof");
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
            if (mod == "createAccount") {
                const newAccount = await userAPI("/signup", {
                    password: data.password,
                    email_address: data.email,
                    customer_name: data.customer_name,
                    address: data.address,
                    confirm_password: data.confirm_password,
                    contact_no: data.contact_no
                })
                setUserData(newAccount)
                saveUser(newAccount)
            }
            if (mod == 0) {
                console.log(userData)
                const newUser = await userAPI("/signup", {
                    email_address: data.email_address,
                    customer_name: data.customer_name,
                    password: data.password,
                    address: data.address,
                    confirm_password: data.confirm_password,
                    contact_no: data.contact_no
                })
                saveUser(newUser);
                setUserData(newUser);
                setShowCon(true)
                // setUserName(googleAccount.data.userData.customer_name)
                navigate('/Signup')
            }


        } catch (error) {
            console.log(error)
           
        }
    }
    const [user, setUser] = useState([])
    const [signout, setSignout] = useState(false)
    return (
        <>
            <div className="dark:bg-five duration-500 bg-P_bg overflow-hidden invert-0">
                <Routes>
                    <Route path="/djoyof" element={
                        <React.Suspense fallback={<div className={`w-full h-screen dark:bg-four flex justify-center items-center`}>
                            <ImSpinner10 className="text-Ofive w-8 h-auto animate-spin  bg-transparent" ></ImSpinner10>
                        </div>} >
                            <Home
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
                            />
                        </React.Suspense>
                    }>
                        <Route pathf="About" element={<About />} />
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
                                <Products cartItems={cartItems} setCartItems={setCartItems} />
                            </React.Suspense>
                        } />
                        <Route path="Contact" element={<Contact />} />
                        <Route path="Help" element={<Help />} />
                        <Route path="Profile" element={<Profile />} />
                        <Route path="Settings" element={<Settings />} />
                        <Route path="Orders" element={<Orders />} />
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
                        data={data}
                        setData={setData}
                        handleLogin={handleLogin}
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
                            setError={setError}
                            error={error}
                            data={data}
                            setData={setData}
                            handleLogin={handleLogin}
                            userName={userName}
                            setUserName={setUserName}
                            userData={userData}
                            showContinue={showContinue}
                            setShowCon={setShowCon}
                        />} />
                </Routes>
                <Outlet />
            </div>
        </>
    );
}

export default App;
