import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import Routs from './components/Routs/Routs'
import AuthProvaider from './components/Probaider/AuthProvaider'
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <>
  <AuthProvaider>
  <Routs>
    <ToastContainer position='top-center' />
    <App />
    </Routs>
    </AuthProvaider>
  </>
)
