import React, { useState } from 'react'
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'

import Page from './components/Page'
import LoginPage from './components/Patients/LoginPage'
import SignupPage from './components/Patients/SignupPage'
import Dashboard from './components/Patients/Dashboard'
import ForgotPassword from './components/Patients/ForgotPassword'

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/page" element={<Page />}/>
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/signup" element={<SignupPage />}/>
        <Route path="/forgotpassword" element={<ForgotPassword />}/>
        <Route path="/dashboard" element={<Dashboard />}/> 
        <Route path="*" element={<Navigate to='/page'/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
