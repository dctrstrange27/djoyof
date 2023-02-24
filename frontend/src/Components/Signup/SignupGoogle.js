import React, { useEffect } from 'react'
import { GoogleLogin } from '@react-oauth/google';
import jwt_Decode from 'jwt-decode'
import { userAPI } from '../../Utils';
import { useNavigate } from 'react-router-dom';
import { saveUser } from '../../Utils';
const SignupGoogle = ({setUserData,hasUserLog}) => {

  const navigate = useNavigate();
  // console.log(userData)

  // fetch("https://jsonplaceholder.typicode.com/posts")
  //   .then(res => res.json())
  //   .then(data => console.log(data))
  //   .catch(e => console.error(e))

  
  // useEffect(()=>{
  // const handleFetch = async()=>{
  //   const dataFetched = await fetch('https://jsonplaceholder.typicode.com/posts')
  //   const data =await dataFetched.json()
  //   console.log(data)    
  // }
  // handleFetch()
  // },[])

  const handleGoogleAcount = async (credGoogle) => {
      try {
        const gCredentials = await userAPI.post("/createGoogleAccount", {
          email_address:credGoogle.email,
          customer_name:credGoogle.name,
          picture:credGoogle.picture,
          verified:credGoogle.email_verified
        })
        setUserData(gCredentials)
        saveUser(gCredentials)
        hasUserLog() 
        navigate("/djoyof/Home");

      } catch (e) {
        console.log(e)
      }
  }

  return (
    <>
      <GoogleLogin theme="filled_black" size="large"
        onSuccess={credentialResponse => {
          const gAcountCredentials = jwt_Decode(credentialResponse.credential)
             handleGoogleAcount(gAcountCredentials)
             //console.log(gAcountCredentials)
          // createGoogleAccount(googleAccountCredentials)
        }}
        onError={() => {
          console.log('Login Failed');
        }}
      />
    </>
  )
}

export default SignupGoogle