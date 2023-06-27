import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './pages/Home/Home.jsx'
import Contact from './pages/Contact/Contact.jsx'
import Inicio from './pages/Inicio/Inicio.jsx'
import GlobalStyle from './components/Global/GlobalStyle.jsx'
import SignIn from './pages/Login/SignIn.jsx'
import SignUp from './pages/SignUp/SignUp.jsx'
import Error from './pages/Error/Error.jsx'
import { RouterProvider, HashRouter, createBrowserRouter} from 'react-router-dom'


import AuthProvider from './contexts/auth.jsx'


const routes = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    errorElement: <Error/> ,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/contact",
        element: <Contact/>
      },
      
    ]
  },
  {
    path:"/inicio",
    element:<Inicio/>,
    
  },
  
  {
    path:"/signin",
    element:<SignIn/>
  },
  {
    path:"/signup",
    element: <SignUp/>
  }
  
],
    {
      basename:"/app_coordinates",
    }
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
    <AuthProvider> 
      <GlobalStyle/>
        <RouterProvider router={routes}/>
    </AuthProvider>
    
  
  </React.StrictMode>,
)
