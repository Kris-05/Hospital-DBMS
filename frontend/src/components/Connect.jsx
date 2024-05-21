import React from 'react'
import { Link } from 'react-router-dom'

function Connect() {
  return <>
    <div className='flex h-screen w-screen bg-orange-200 items-center justify-center'>
        <div className='flex w-screen h-11/12 rounded-2xl bg-gradient-to-r from-purple-200 to-gray-100 '>
        <div className='flex-1 grid place-items-center'>
            <div class="w-full max-w-sm bg-slate-300 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <div class="flex flex-col items-center py-10">
                        <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src=" " alt=" "/>
                        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Admin Login</h5>
                        <span class="text-sm text-gray-500 dark:text-gray-400">Only authorized persons can only login</span>
                        <div class="flex mt-4 md:mt-6">
                            <Link to='/admin/login'>
                                <button class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Procced to Login
                                    <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                    </svg>
                                </button>
                            </Link>               
                        </div>
                    </div>
            </div>
        </div>
        <div className='flex-1 grid place-items-center'>
            <div class="m-10 w-full max-w-sm bg-slate-300 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <div class="flex flex-col items-center py-10">
                        <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src=" " alt=" "/>
                        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Employee Login</h5>
                        <span class="text-sm text-gray-500 dark:text-gray-400">Please choose your correct designation</span>
                        <div class="flex mt-4 md:mt-6">
                            <Link to='/employee/login'>
                                <button class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Procced to Login
                                    <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                    </svg>
                                </button>
                            </Link>               
                        </div>
                    </div>
            </div>
        </div>
        </div>
    </div>
  </>
}

export default Connect
