import axios from 'axios'

//saving user data in localstorage
// export const saveUser = (res) => {
//     /**
//      * Para naman to sa pag save ng data ng user na nag login
//      * ngayon
//      */
//     localStorage.setItem('userInfo', JSON.stringify(res.data.userData))
//     // tapos return lang yung data nayun
//     return res.data.userData
// }
export const updateUser = (userData) => {
    localStorage.setItem('userInfo', userData)
    // tapos return lang yung data nayun
    return userData
}
//getting user in local storage
// export const getUser = () => {
//     /**
//      * Para to sa pagkuha ng data ng user na naka logedin
//      */
//     const data =  JSON.parse(localStorage.getItem("userInfo"));

//     return data
// }

//saving data to localstorage
export const saveUser =(res)=>{
    localStorage.setItem("userData", JSON.stringify(res.data.userData))
    return res.data.userData
}
export const getUser=()=>{
     const data = JSON.parse(localStorage.getItem("userData"))
      return data
    }

export const amIloggedIn =(navigate)=>{
    const loggedIn = getUser()
    if(!loggedIn) navigate('/login')
    return loggedIn    
}
export const loginFromSignUp=(navigate)=>{
    navigate('/main')
}

export const signOut = (navigate) => {
    // delete lang ng userData which means matatanggal lang yun
    localStorage.removeItem('userInfo')
}
// export const amIloggedIn = (navigate) => {
//     const loggedInUser = getUser()
//     if(!loggedInUser) {
//         navigate('/login')
//     }    
//     return loggedInUser // if meron, return yung data para magamit sa kung sino nag request
// }

export const rememberMe = (email_address,password) => {
    localStorage.setItem("remembered",JSON.stringify({
        email_address, password
    }))
}

export const getRemembered = () => { return JSON.parse(localStorage.getItem('remembered')) }

export const API = axios.create({ baseURL : 'http://localhost:4000/api' })
export const userAPI = axios.create({ baseURL : 'http://localhost:4000/api/user' })
export const orderAPI = axios.create({ baseURL : 'http://localhost:4000/api/order' })
