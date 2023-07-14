import { useContext, useState } from 'react'
import Footer from './components/Home/Footer'
import Header from './components/Home/Header'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import { ThemeContext } from './contexts/Theme'


function App() {
  
  const {hamburguer, theme} = useContext(ThemeContext)


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
