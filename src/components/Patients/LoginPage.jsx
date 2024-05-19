import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'

function Patient() {
  const navigate = useNavigate();
    
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

  //const handleLogin = async(e) 
  const handleLogin = async(e) => {
    try {
        e.preventDefault()
        console.log('Signup Sucessful')
        navigate('/dashboard')
        Swal.fire({
            icon: "success",
            title: "Login Successful!",
            text: "Redirecting to Dashboard"
        })
    } catch (error) {
        console.log('Error While signup')
        Swal.fire({
            icon: "error",
            title: "Check your details",
            text: "Invalid Credentials..."
        })
        setEmail('')
        setPhone('')
    }
}


  return <>
    <div className='flex items-center justify-center bg-emerald-300 h-screen w-screen'> 
        <form className="w-1/4 flex flex-col gap-3 p-10 bg-white backdrop-blur-md rounded-2xl" action=''>
            <h3 className='text-3xl font-poetsen text-center mb-5'> 
                Sign In
            </h3>
            <div className="relative z-0 w-full mb-5 group">
                <input type="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label for="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Email address
                </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
                <input type="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)}  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label for="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Password
                </label>
            </div>
            <div className="hover:underline">
              <Link to={'/forgotpassword'}>
                <strong>Forgot Password?</strong>
              </Link>    
            </div>
            <div className='grid place-items-center'>
                <button type="submit" onClick={handleLogin} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Submit
                </button> 
                <div className='mt-3'>
                    <p>
                        Don't have an Account?
                        <Link to={'/signup'} >
                          <strong>Register</strong>
                        </Link>
                    </p>
                </div>
            </div> 
        </form>
    </div>
  </>
}

export default Patient
