import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import User from './User.jsx';
import Formm from './Formm.jsx';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
  {/* <User /> */}
  <Formm/>

  </StrictMode>,
)

