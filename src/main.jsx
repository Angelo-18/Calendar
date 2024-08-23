import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AppCalendar } from './AppCalendar'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppCalendar/>
  </StrictMode>,
)
