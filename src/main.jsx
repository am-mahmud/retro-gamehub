import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router/dom";
import { ToastContainer } from "react-toastify";
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import router from './routes/Routes';





createRoot(document.getElementById('root')).render(
  <StrictMode>




    <AuthProvider>

      <RouterProvider router={router} />
      <ToastContainer
        position="top-center"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="dark"
      />

    </AuthProvider>





  </StrictMode>,
)
