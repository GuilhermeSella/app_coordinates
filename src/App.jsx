import { useContext, useState, useEffect } from 'react'
import Footer from './components/Home/Footer'
import Header from './components/Home/Header'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import { ThemeContext } from './contexts/Theme'


function App() {
  
  const {hamburguer, setTheme} = useContext(ThemeContext)

      function loadTheme(){
        const objU = JSON.parse(localStorage.getItem("@userStorage"))
        if(objU){
            setTheme(objU.theme)
        }
    }

    useEffect(()=>{
        loadTheme()
    },[])


  return (
    <>
   
    <Header/>
      {hamburguer === "disable" ? (
        <>
          <Outlet />
         <Footer/>
        </>
      ) : (
        
          <Navbar />
         
       
      )}
        
      
   
    
    </>
  )
}

export default App
