import React, { useEffect, useState } from 'react'
import UseDarkMode from './UseDarkMode'
import { BsSun } from 'react-icons/bs'
import { BsFillMoonStarsFill} from 'react-icons/bs'


const DarkMode = () => {
  // const [darkMode, setDarkMode] = useState(true)
  // const [theme, setTheme] = useState('light')

  // const changeTheme = () => { !darkMode ? setTheme('light') : setTheme('dark') }
  // UseDarkMode()
  const [colorTheme, setTheme] = UseDarkMode()



  return (
    <>
      <div className='flex flex-col h-screen w-screen justify-center items-center bg-gray-200 dark:bg-gray-900'>
        {/* <IoSunnyOutline className='w-5 h-5 text-white'></IoSunnyOutline> */}
        <span onClick={()=>{  setTheme(colorTheme)}} className=' flex flex-row space-x-5 mb-10'> 
        {colorTheme === 'light' ? (<BsSun className='w-5 h-5 text-white'></BsSun>):(<BsFillMoonStarsFill className='w-5 h-5 text-black'></BsFillMoonStarsFill>)}

         </span>

        <h1 className='text-black bg-red dark:text-blue-700'>This is Sample of DarkMode</h1>
        <button onClick={() => {
          // setDarkMode(!darkMode)
          // console.log(darkMode)
          // changeTheme()
          // console.log(theme)

        }} className='dark:text-gray-200 p-2 px-4 mt-2 dark:border-[1px]'>Click Me!</button>

      </div>

    </>
  )
}

export default DarkMode

