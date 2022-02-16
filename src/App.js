
import Login from './Components/Login/Login'


import React from 'react'

import Home from './Components/Home/Home'
import About from './Components/About/About'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom' 
import { render } from '@testing-library/react';
class App extends React.Component{
  constructor(props){
    super(props);
    this.state={apiResponse:""};
  }
CallAPI(){
  fetch("http://localhost:9000/testAPI")
  .then(res => res.text())
  .then(res => res.setState({apiResponse:res}));}
  componentWillMount(){
    this.CallAPI();
  }

render(){
  return (
  <> 
    {/* <h1 class='font-semibold text-center' >Home</h1> */}
<<<<<<< HEAD
      {/* hahahaha may apoooy */}
=======
    {/*sample adding comment here*/}
    {/*sample adding comment here 2*/}
    
    {/*sample asdfdsf comment here 2*/}
>>>>>>> 067133a5c7ff65798af16910b60dcbf7aabd28e0
    <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Login' element={<Login/>} />
          <Route path='/About' element={<About/>} />
        </Routes>
    </Router>
    <p>{this.state.apiResponse}</p>
    <div class="flex bg-[#24262B] w-full justify-center md:h-screen lg:h-screen xl:h-screen items-center">
        <div class="flex bg-[#141517] relative justify-center items-center h-screen w-full border-0 md:justify-center md:items-center md:max-h-[55rem] xl:max-w-[90%] md:border-white md:border-y-[1px] md:border-opacity-25 lg:max-w-[100%] 2xl:border-[#F29A4B] 2xl:rounded-[47px]">
          {/* <img src={require('../../img/rectangle.png')} class="absolute invisible md:max-w-[700px] md:visible md:w-[80%] md:h-auto"></img> */}
        
              <img src={require('./img/login_bg.png')} class=" invisible md:max-w-[700px] md:visible md:w-[80%] md:h-auto xl:max-w-[900px] xl:min-h-[500px] xl:max-h-full 2xl:max-w-[900px] 2xl:min-h-[500px] 2xl:max-h-full"></img>
            
          <div class="flex flex-col absolute w-full h-[80vh] border-[#F29A4B] justify-center md:border md:border-[#F29A4B] md:bg-opacity-50 border-opacity-25 md:rounded-[47px] md:max-w-[60%] md:border-none">
           <img src={require('./img/d.png')} class='max-w-[500px] w-full absolute self-center md:invisible blur-[15px]'></img>
            <div class="flex flex-col w-full h-auto px-12 bg-[#0f0f11] bg-opacity-[80%] border-white border-y-[1px] md:max-w-[80%] md:translate-x-[4.5rem] border-opacity-25 justify-center z-10 md:w-full md:h-auto md:rounded-[47px] md:py-0 md:px-7 xl:max-w-[65%] xl:translate-x-[25%] 2xl:max-w-[50%] 2xl:translate-x-[50%] 2xl:border-[#F29A4B] 2xl:px-9">
              <img src={require('./img/logo.png')} class='h-auto w-[130px] md:max-w-[30%] self-center z-10 py-3 lg:w-[120px] lg:h-auto'></img>
              <h1 class="w-fit self-center py-2 text-[#CBCBCB] text-[1rem] tracking-[0.25rem] font-medium font-['Nunito Sans'] z-10 lg:py-0">SIGN IN TO DJOYOF</h1>
              <form class='flex flex-col'>
                <div class="mb-4 py-2 z-10">
                  <label class="block mb-1 text-sm text-[#CBCBCB] font-['Nunito Sans'] tracking-[0.1rem] z-10" for="email">username</label>
                  <input id="email" type="text" name="email" class="text-[#CBCBCB] font-['Nunito Sans'] py-2 px-3 w-full h-[37px] bg-[#1A1B1E] border-[#1A1B1E] focus:outline-none border border-b-[#F29A4B] border-opacity-50" />
                </div> 
                <div class="mb-4 z-10">
                  <label class="block mb-1  text-sm text-[#CBCBCB] tracking-[0.1rem]" for="password">Password</label>
                  <input id="password" type="password" name="password" class="text-[#CBCBCB] py-2 px-3 w-full h-[37px] bg-[#1A1B1E] border-[#1A1B1E] focus:outline-none border border-b-[#F29A4B] border-opacity-50 " />
                </div>
                <div class="mt-6 flex items-center justify-between">
                  <div class="flex items-center z-10">
                    <input id="remember_me" type="checkbox" class="border border-gray-300 text-red-600 shadow-sm focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50" />
                    <label for="remember_me" class="ml-2 block text-sm leading-5 text-[#a3a3a3]"> Remember me </label>
                  </div>
                  <a href="#" class="text-sm text-[#1CADFF] z-10"> Forgot your password? </a>
                </div>
                <div class="py-[45px] lg:py-[20px] flex items-center justify-center z-10">
                  <button class=" text-sm font-['Nunito Sans'] tracking-[0.1rem] w-30 px-4 py-1  bg-[#b18055] self-center border border-transparent rounded-md font-semibold capitalize text-white hover:bg-[#F29A4B] focus:outline-none disabled:opacity-25 transition">Sign In</button>
                </div>
                <div class="text-center z-10 mt-1 pb-7">
                  <a href="#" class="underline font-['Nunito Sans']  text-sm text-[#CBCBCB]">Sign up for an account</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
</>
  );
}
}

export default App;
