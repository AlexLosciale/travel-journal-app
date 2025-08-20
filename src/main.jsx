import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { TripsProvider } from './context/TripsContext.jsx'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TripsProvider>
      <App />
    </TripsProvider>
  </StrictMode>
)
