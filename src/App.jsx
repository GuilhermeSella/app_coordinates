import { useState } from 'react'
import Footer from './components/Home/Footer'
import Header from './components/Home/Header'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'


function App() {
  
  return (
    <>
   
    <Header/>
      <Navbar />
      <Outlet/>
    <Footer/>
    
    </>
  )
}

export default App
