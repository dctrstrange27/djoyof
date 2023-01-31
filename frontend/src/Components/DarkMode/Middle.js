import { useEffect, useState } from "react";
import UseDarkMode from "./UseDarkMode";

export default function Middle() {
 
    const [on, off] = useState(false)

    const [light, setLight] = useState(false)
    
    useEffect(()=>{
        setLight(!light)
    },[off])


    return [light]
}
