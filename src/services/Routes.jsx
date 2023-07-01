import App from '../App.jsx'
import Home from '../pages/Home/Home.jsx'
import {Coordinates} from '../pages/Coordinates/Coordinates.jsx'
import Inicio from '../pages/Inicio/Inicio.jsx'
import SignIn from '../pages/Login/SignIn.jsx'
import SignUp from '../pages/SignUp/SignUp.jsx'
import Account from '../pages/Account/Account.jsx'
import Error from '../pages/Error/Error.jsx'
import Saved from '../pages/Saved/Saved.jsx'
import Private from '../Private.jsx'
import { RouterProvider, HashRouter, createBrowserRouter} from 'react-router-dom'


export const routes = createBrowserRouter([

    {
      path:"/",
      errorElement:<Error /> ,
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
          },
          {
            path:"/home/account",
            element:<Account/>
          },
          {
            path:"/home/saved",
            element: <Saved/>
          }
      ]
    }
    
  ],
      {
        basename:"/app_coordinates",
      }
  )