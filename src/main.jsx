import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router/dom";
// import router from './routes/Routes';

import { ToastContainer } from "react-toastify";
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import router from './routes/routes';
// import { Helmet } from 'react-helmet';
// import router from './routes/routes';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <AuthProvider>
      
      <RouterProvider router={router} />
     <ToastContainer />
   
    </AuthProvider>
      
  </StrictMode>,
)
