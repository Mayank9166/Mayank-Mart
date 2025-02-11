import React, { useEffect, useState } from 'react'
import lightButton from '../../assets/lightmode.png'
import darkButton from '../../assets/darkmode.png'

const DarkMode = () => {
    const [theme, settheme] = useState("dark")
     const element= document.documentElement; //html element
    useEffect(() => {
      if(theme==="dark")
      {
        element.classList.remove("dark")
        element.classList.add("light");
       
      }
      else{
        element.classList.remove("light")
        element.classList.add("dark")
        
      }
    }, [theme])
    
  return (
    <div className='relative'>
      <img src={lightButton} onClick={()=>{settheme(theme==="light"?"dark":"light")}} alt="" className={`w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 absolute right-0 z-10 ${theme==="light"?"opacity-0":"opacity-100"}`} />
      <img src={darkButton} onClick={()=>{settheme(theme==="light"?"dark":"light")}} alt="" className={`w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 `}/>
    </div>
  )
}

export default DarkMode
