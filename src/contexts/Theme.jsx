import { doc, getDoc, setDoc } from 'firebase/firestore';
import {useState, createContext, useEffect} from 'react'
import { db } from '../services/Firebase-connection';


export const ThemeContext = createContext();

const DarkModeProvider = ({children})=>{

    const [hamburguer,setHamburguer] = useState("disable")
    const objU = JSON.parse(localStorage.getItem("@userStorage"))
    const [theme, setTheme] = useState("")

    
   

    async function toggleTheme(){
        setTheme(theme === "light" ? "dark" : "light")
        
    }

    function toggleHamburguer(){
        setHamburguer(hamburguer === "disable" ? "enable" : "disable")
      
        
    }

    return(
        <ThemeContext.Provider value={{theme, setTheme, toggleTheme, toggleHamburguer, hamburguer}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default DarkModeProvider