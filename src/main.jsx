import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './pages/Home/Home.jsx'
import Coordinates from './pages/Coordinates/Coordinates.jsx'
import Inicio from './pages/Inicio/Inicio.jsx'
import SignIn from './pages/Login/SignIn.jsx'
import SignUp from './pages/SignUp/SignUp.jsx'
import Error from './pages/Error/Error.jsx'
import Private from './Private.jsx'
import { RouterProvider, HashRouter, createBrowserRouter} from 'react-router-dom'
import './main.css'
import DarkModeProvider from './contexts/Theme.jsx'
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
        },
        {
          path:"/home/coordinates",
          element: <Coordinates />
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
   
   <DarkModeProvider>
   
    <AuthProvider> 
          <RouterProvider router={routes}/>
          
      </AuthProvider>
   </DarkModeProvider>
    
  
  </React.StrictMode>,
)
