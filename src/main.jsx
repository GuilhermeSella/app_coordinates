import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './pages/Home/Home.jsx'
import Contact from './pages/Contact/Contact.jsx'
import Inicio from './pages/Inicio/Inicio.jsx'
import { RouterProvider, HashRouter, createBrowserRouter} from 'react-router-dom'

const routes = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/contact",
        element: <Contact/>
      }
    ]
  },
  {
    path:"/inicio",
    element:<Inicio/>
  }
  
],
    {
      basename:"/app_coordinates",
    }
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 
    <RouterProvider router={routes}/>
  
  </React.StrictMode>,
)
