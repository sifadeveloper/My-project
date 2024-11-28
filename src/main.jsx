import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Make from './Usestate.jsx'
import  DataFetcher from'./useEffect.jsx'
import './index.css'
 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
    <Make></Make>
    <DataFetcher></DataFetcher>
  </StrictMode>
  

)
