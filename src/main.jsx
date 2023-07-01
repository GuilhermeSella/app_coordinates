import React from 'react'
import ReactDOM from 'react-dom/client'

import './main.css'
import DarkModeProvider from './contexts/Theme.jsx'
import AuthProvider from './contexts/Auth.jsx'
import { RouterProvider } from 'react-router-dom'
import {routes} from './services/Routes'
import { queryClient } from './services/QueryClient'
import { QueryClientProvider } from 'react-query'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
   <DarkModeProvider>
   
    <AuthProvider> 
    <QueryClientProvider client={queryClient}>
       
            <RouterProvider router={routes}/>
        
        </QueryClientProvider>  
      </AuthProvider>
   </DarkModeProvider>
    
  
  </React.StrictMode>,
)
