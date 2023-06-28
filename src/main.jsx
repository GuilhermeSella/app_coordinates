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
import Private from './Private.jsx'
import { RouterProvider, HashRouter, createBrowserRouter} from 'react-router-dom'

import  ThemeProvider from './contexts/Theme.jsx'
import AuthProvider from './contexts/Auth.jsx'


const routes = createBrowserRouter([

  {
    path:"/",
    element:<Inicio/>,
    
  },
  {
    path:"/signin",
    element:<SignIn/>
  },
  {
    path:"/signup",
    element: <SignUp/>
  }, 
  {
    path:"/home",
    element: <Private><App/></Private>,
    children:[
        {
          path:"/home",
          element:<Home/>
        }
    ]
  }
  
],
    {
      basename:"/app_coordinates",
    }
)




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
   <ThemeProvider>
    <AuthProvider> 
        <GlobalStyle/>
          <RouterProvider router={routes}/>
      </AuthProvider>
   </ThemeProvider>
    
  
  </React.StrictMode>,
)
