import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

function ForgotPassword({user,setUser}) {
    const navigate = useNavigate();
    
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [resetPassword,setresetPassword] = useState('')
  
    //const handleLogin = async(e) 
    const handleResetPassword = async(e) => {
      try {
        let index = 0
        for(let i=0;i < user.length;i++){
            if(user[i].email === email){
                index = i
                break;
            }
        }
        if(index === 0){
            console.log('error 404 1')
        }
        user[index].password = password
        console.log(user)
       
        e.preventDefault()
        navigate('/login')
        Swal.fire({
            icon: "success",
            title: "Password changes successfully!",
            text: "Redirecting to Login"
        })
        // console.log(email,password,resetPassword)
      } catch (error) {
        //   console.log('Error While signup')
          Swal.fire({
              icon: "error",
              title: "Check your details",
              text: "Check your password carefully"
          })
          setEmail('')
          setPassword('')
          setresetPassword('')
      }
  }


  return <>
    <div className='flex items-center justify-center bg-sky-300 h-screen w-screen'>  
        <form className="w-1/4 flex flex-col gap-3 p-10 bg-white backdrop-blur-md rounded-2xl" action=''>
            <h3 className='text-3xl font-poetsen text-center mb-5'> 
                Change Password
            </h3>
            <div className="relative z-0 w-full mb-5 group">
                <input type="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label for="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    Email address
                </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
                <input type="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label for="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    New Password
                </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
                <input type="password" name="confirm_password" value={resetPassword} onChange={(e)=>setresetPassword(e.target.value)} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label for="confirm_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    Confirm password
                </label>
            </div>            
            <div className='grid place-items-center'>
                <button type="submit" onClick={handleResetPassword} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Change
                </button>
            </div> 
        </form>
    </div>
  </>
}

export default ForgotPassword
