import React from 'react'
import { GoogleLogin } from '@react-oauth/google';
import jwt_Decode from 'jwt-decode'
import { userAPI } from '../../Utils';
import { useNavigate } from 'react-router-dom';
import { saveUser } from '../../Utils';
const SignupGoogle = ({ loginForm, setLoginForm, userData,setUserData }) => {

  const navigate = useNavigate();
  console.log(userData)
  const handleGoogleAcount = async (credGoogle) => {
      console.log(credGoogle.email_address)
      try {
        const gCredentials = await userAPI.post("/createGoogleAccount", {
          email_address:credGoogle.email,
          customer_name:credGoogle.name,
          picture:credGoogle.picture,
          verified:credGoogle.email_verified
        })
        setUserData(gCredentials)
        saveUser(gCredentials)
        navigate("/djoyof");

      } catch (e) {
        console.log(e.response.data.error_message)
      }
    //setError('')
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