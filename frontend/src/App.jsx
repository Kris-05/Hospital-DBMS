import React, { useState } from 'react'
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'

import Page from './components/Page'
import Connect from './components/Connect'

import LoginPage from './components/Patients/LoginPage'
import SignupPage from './components/Patients/SignupPage'
import ForgotPassword from './components/Patients/ForgotPassword'
import Dashboard from './components/Patients/Dashboard'

import AdminLogin from './components/Admin/AdminLogin'
import AdminForgotPassword from './components/Admin/AdminForgotPassword'
import AdminDashboard from './components/Admin/AdminDashboard'

import EmployeeLogin from './components/Employee/EmployeeLogin'
import EmployeeSignUp from './components/Employee/EmployeeSignUp'
import EmployeeForgotPassword from './components/Employee/EmployeeForgotPassword'
import EmployeeDashboard from './components/Employee/EmployeeDashboard'

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>

        {/* Patient */}
        <Route path="/home" element={<Page />}/>
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/signup" element={<SignupPage />}/>
        <Route path="/forgotpassword" element={<ForgotPassword />}/>
        <Route path="/dashboard" element={<Dashboard />}/> 

        {/* Connect */}
        <Route path="/employee" element={<Connect/>}/>
        <Route path="/admin" element={<Connect/>}/>

        {/* Employee */} 
        <Route path='/employee/login' element={<EmployeeLogin/>}/>
        <Route path='/employee/signup' element={<EmployeeSignUp/>}/>
        <Route path='/employee/forgotpassword' element={<EmployeeForgotPassword/>}/>
        <Route path='/employee/dashboard' element={<EmployeeDashboard/>}/>
        
        
        {/* Admin */}
        <Route path='/admin/login' element={<AdminLogin/>}/>
        <Route path='/admin/forgotpassword' element={<AdminForgotPassword/>}/>
        <Route path='/admin/dashboard' element={<AdminDashboard/>}/>

        <Route path="*" element={<Navigate to='/home'/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
