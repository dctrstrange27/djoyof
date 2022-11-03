import axios from 'axios'
import { useState } from 'react'

export const saveUser = (response) => {
    localStorage.setItem('userData', JSON.stringify(response.data.userData))
    return response.data.userData
}

export const updateUser = (userData) => {
    localStorage.setItem('userData', userData)
    return userData
}

export const getUser = () => {
    return JSON.parse(localStorage.getItem("userData"));
}

export const signOut = () => {
    localStorage.removeItem('userData')
}

export const amIloggedIn = (navigate) => {
    const loggedInUser = getUser()
    if(!loggedInUser) navigate('/login')
    return loggedInUser 
}

export const rememberMe = (email_address,password) => {
    localStorage.setItem("remembered",JSON.stringify({
        email_address, password
    }))
}




export const getRemembered = () => { return JSON.parse(localStorage.getItem('remembered')) }

export const API = axios.create({ baseURL : 'http://localhost:4000/api' })
export const userAPI = axios.create({ baseURL : 'http://localhost:4000/api/user' })
export const orderAPI = axios.create({ baseURL : 'http://localhost:4000/api/order' })
export const userGoogleAPI = axios.create({ baseURL : 'http://localhost:4000/api/user' })