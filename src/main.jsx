import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import App from './App.jsx'
import Test from './Test.jsx'
// import Condition from './Condition.jsx'
// import Map from './Map.jsx'
// import Event from './Event.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Test />
    {/* <Map/>
    <Condition/>
    <Event/> */}
  </StrictMode>,
)
