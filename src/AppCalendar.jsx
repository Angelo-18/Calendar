import React from 'react'
import { AppRouter } from './routes'
import { BrowserRouter } from 'react-router-dom'

export const AppCalendar = () => {
  return (
    <BrowserRouter>
        <AppRouter/>
    </BrowserRouter>
  )
}
