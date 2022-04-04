import axios from 'axios'

export const saveUser = (response) => {
    /**
     * Para naman to sa pag save ng data ng user na nag login
     * ngayon
     */
    localStorage.setItem('userData', JSON.stringify(response.data.userData))
    // tapos return lang yung data nayun
    return response.data.userData
}

export const updateUser = (userData) => {
    localStorage.setItem('userData', userData)

    // tapos return lang yung data nayun
    return userData
}

export const getUser = () => {
    /**
     * Para to sa pagkuha ng data ng user na naka logedin
     */
    console.log("GET", JSON.parse(localStorage.getItem("userData")))
    return JSON.parse(localStorage.getItem("userData"));
}

export const signOut = () => {
    // delete lang ng userData which means matatanggal lang yun
    localStorage.clear()
}

export const amIloggedIn = (history) => {
    const loggedInUser = getUser()
    if(!loggedInUser) history.push('/login')
    return loggedInUser // if meron, return yung data para magamit sa kung sino nag request
}

export const rememberMe = (email_address,password) => {
    localStorage.setItem("remembered",JSON.stringify({
        email_address, password
    }))
}

export const getRemembered = () => {
    return JSON.parse(localStorage.getItem('remembered'))
}

export const API = axios.create({ baseURL : 'http://localhost:3001/api' })