import React from 'react'
import { Navigate, Route, Routes } from 'react-router'
import { LoginPage } from '../auth/pages/LoginPage';
import { CalendarPage } from '../calendar';

export const AppRouter = () => {
  const authStatus = 'not-authenticateds';
  return (
    <Routes>
      {
        (authStatus === 'not-authenticated')
        ? <Route path="/auth/*" element={ <LoginPage /> } />
        : <Route path='/*' element= { <CalendarPage/>  } />
      }
      <Route path="./*" element={ <Navigate to="/auth/login" /> } />

    </Routes>
  )
}
