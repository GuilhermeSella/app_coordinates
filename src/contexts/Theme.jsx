import {useState, createContext} from 'react'

export const ThemeContext = createContext();

const DarkModeProvider = ({children})=>{

    const [theme, setTheme] = useState("light")
    const [hamburguer,setHamburguer] = useState("disable")

    function toggleTheme(){
        setTheme(theme === "light" ? "dark" : "light")
    }

    function toggleHamburguer(){
        setHamburguer(hamburguer === "disable" ? "enable" : "disable")
        console.log(hamburguer)
    }

    return(
        <ThemeContext.Provider value={{theme, toggleTheme, toggleHamburguer, hamburguer}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default DarkModeProvider