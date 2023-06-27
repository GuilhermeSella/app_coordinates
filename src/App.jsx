import { useState } from 'react'
import Footer from './components/Home/Footer'
import Header from './components/Home/Header'
import { Outlet } from 'react-router-dom'



function App() {
  
  return (
    <>
   
    <Header/>
      <Outlet/>
     <Footer/>
    
    </>
  )
}

export default App
