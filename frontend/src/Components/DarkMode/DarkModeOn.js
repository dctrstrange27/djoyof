
import UseDarkMode from "./UseDarkMode"

const DarkModeOn =()=>{
    const [colorTheme, setTheme] = UseDarkMode()
    setTheme("dark")
    console.log(colorTheme)

}

export default DarkModeOn