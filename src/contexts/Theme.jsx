import {useState, createContext} from 'react'

export const ThemeContext = createContext();

const DarkModeProvider = ({children})=>{

    const [theme, setTheme] = useState("light")

    function toggleTheme(){
        setTheme(theme === "light" ? "dark" : "light")
    }

    return(
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default DarkModeProvider