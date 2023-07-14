import { doc, getDoc } from 'firebase/firestore';
import {useState, createContext} from 'react'
import { db } from '../services/Firebase-connection';

export const ThemeContext = createContext();

const DarkModeProvider = ({children})=>{

    const [theme, setTheme] = useState("light")
    const [hamburguer,setHamburguer] = useState("disable")

    async function toggleTheme(){
        setTheme(theme === "light" ? "dark" : "light")
      
    }

    function toggleHamburguer(){
        setHamburguer(hamburguer === "disable" ? "enable" : "disable")
        
    }

    return(
        <ThemeContext.Provider value={{theme, toggleTheme, toggleHamburguer, hamburguer}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default DarkModeProvider