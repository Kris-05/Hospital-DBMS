import React from 'react'
import {Link} from 'react-router-dom'

import '../Navbar/Navbar.css'

function Navbar() {
  return <>
    <nav id="navbar" className="mt-2 bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600 ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
        <strong>HEAL</strong>Haven
      </span>
      <div className="flex-1 items-center justify-evenly" id="navbar-sticky">
        <ul className="flex flex-row justify-evenly p-0 font-medium rounded-lg dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li>
              <a href="#Home" className="block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500">
                Home
              </a>
          </li>
          <li>
              <a href="#About"  className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                About
              </a>
          </li>
          <li>
            <a href="#Services"  className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
              Services
            </a>
          </li>
          <li>
            <a href="#Booking"  className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
              Booking
            </a>
          </li>
          <li>
            <a href="#Contact"  className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
              Contacts
            </a>
          </li>
        </ul>
      </div>
      <div className="flex md:order-2 space-x-3">
        <Link to={'/login'}>
          <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Get started
          </button>
        </Link>    
      </div>
      </div>
    </nav>
  </>
}

export default Navbar
