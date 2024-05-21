import React from 'react'
import { Link } from 'react-router-dom'

function Dashboard({user,setUser}) {
  return <>
    <div className='flex bg-blue-300 h-screen w-screen p-2'>
      <div className='w-2/3 flex flex-col'>
        <div className='h-1/3 border-8 border-blue-300 rounded-3xl bg-green-200'>
          <div className='text-xl mt-6 flex justify-between'>
            <div className='ml-12 text-3xl font-acme bg-violet-200 py-2 px-6 rounded-2xl'>HI! Willaim Peterson</div>
            <div className='mr-12 text-3xl font-acme bg-violet-200 py-2 px-6 rounded-2xl'>Your ID: 12345</div>
          </div>
          <br/> 
          <div className='flex'>
            <div>
              <div className='mx-8 rounded-full bg-white w-28 h-28'> 
              </div>
            </div>
            <div className='flex-1 flex'>
              <div className='flex-1 grid place-items-center border-8 mr-4 bg-gray-200 rounded-3xl border-green-200'>
                  <span className='text-2xl font-semibold text-violet-400'>Blood</span>
                  <span className='text-xl font-bold'>A+</span>
              </div>
              <div className='flex-1 grid place-items-center border-8 mr-4 bg-gray-200 rounded-3xl border-green-200'>
                  <span className='text-2xl font-semibold text-violet-400'>Height</span>
                  <span className='text-xl font-bold'>165cm</span>
              </div>
              <div className='flex-1 grid place-items-center border-8 mr-4 bg-gray-200 rounded-3xl border-green-200'>
                  <span className='text-2xl font-semibold text-violet-400'>Weight</span>
                  <span className='text-xl font-bold'>65kg</span>
              </div>
              <div className='flex-1 grid place-items-center border-8 mr-4 bg-gray-200 rounded-3xl border-green-200'>
                  <span className='text-2xl font-semibold text-violet-400'>BMI</span>
                  <span className='text-xl font-bold'>Normal</span>
              </div>
            </div>
          </div>
        </div>
        <div className='h-2/3 border-8 border-blue-300 rounded-3xl bg-teal-200'>
          <div className='grid place-items-center'>
            <span class="text-center text-2xl font-bold mb-5 bg-violet-200 rounded-2xl px-6 py-2 max-w-fit mt-6">Your Appointments</span>
          </div>
          {/* component */}
          <table class="table-auto w-full border-collapse border border-gray-300">
              <thead>
                  <tr class="bg-gray-200">
                      <th class="border border-gray-300 p-2">Serial Number</th>
                      <th class="border border-gray-300 p-2">Appointment No</th>
                      <th class="border border-gray-300 p-2">Doctor ID</th>
                      <th class="border border-gray-300 p-2">Doctor Name</th>
                      <th class="border border-gray-300 p-2">Specialty</th>
                      <th class="border border-gray-300 p-2">Time</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td class="text-center border border-gray-300 p-2">1</td>
                      <td class="text-center border border-gray-300 p-2">A001</td>
                      <td class="text-center border border-gray-300 p-2">D123</td>
                      <td class="text-center border border-gray-300 p-2">Dr. John Doe</td>
                      <td class="text-center border border-gray-300 p-2">Cardiology</td>
                      <td class="text-center border border-gray-300 p-2">10:00 AM</td>
                  </tr>
                  <tr>
                      <td class="text-center border border-gray-300 p-2">2</td>
                      <td class="text-center border border-gray-300 p-2">A002</td>
                      <td class="text-center border border-gray-300 p-2">D456</td>
                      <td class="text-center border border-gray-300 p-2">Dr. Jane Smith</td>
                      <td class="text-center border border-gray-300 p-2">Neurology</td>
                      <td class="text-center border border-gray-300 p-2">10:30 AM</td>
                  </tr>
                  <tr>
                      <td class="text-center border border-gray-300 p-2">3</td>
                      <td class="text-center border border-gray-300 p-2">A003</td>
                      <td class="text-center border border-gray-300 p-2">D789</td>
                      <td class="text-center border border-gray-300 p-2">Dr. Emily White</td>
                      <td class="text-center border border-gray-300 p-2">Orthopedics</td>
                      <td class="text-center border border-gray-300 p-2">11:00 AM</td>
                  </tr>
              </tbody>
          </table>
        </div>
      </div>
      <div className='w-1/3 bg-emerald-200 border-8 border-blue-300 rounded-3xl'>
        <div className='rounded-2xl m-4'>
          <div className='border-8 bg-violet-200 border-emerald-200 grid place-items-center p-4 rounded-3xl text-2xl'>
            Personal Details
          </div>
          <form>
            {/* component */}
            <table className="table-auto w-full border-collapse">
              <thead>
                {/* <tr className="bg-gray-200">
                  <th className="p-2">Field</th>
                  <th className="p-2">Input</th>
                </tr> */}
              </thead>
              <tbody>
                <tr>
                  <td className="font-bold p-2">Name</td>
                  <td className="p-2">
                    <input type="text" className="w-full p-1 border border-gray-300 rounded-2xl" />
                  </td>
                </tr>
                <tr>
                  <td className="font-bold p-2">Age</td>
                  <td className="p-2">
                    <input type="text" className="w-full p-1 border border-gray-300 rounded" />
                  </td>
                </tr>
                <tr>
                  <td className="font-bold p-2">Gender</td>
                  <td className="p-2">
                    <input type="text" className="w-full p-1 border border-gray-300 rounded"/>{user.gender}
                  </td>
                </tr>
                <tr>
                  <td className="font-bold p-2">Blood Group</td>
                  <td className="p-2">
                    <input type="text" className="w-full p-1 border border-gray-300 rounded" />
                  </td>
                </tr>
                <tr>
                  <td className="font-bold p-2">Height</td>
                  <td className="p-2">
                    <input type="number" className="w-full p-1 border border-gray-300 rounded" />
                  </td>
                </tr>
                <tr>
                  <td className="font-bold p-2">Weight</td>
                  <td className="p-2">
                    <input type="number" className="w-full p-1 border border-gray-300 rounded" />
                  </td>
                </tr>
                
                <tr>
                  <td className="font-bold p-2">Phone</td>
                  <td className="p-2">
                    <input type="tel" className="w-full p-1 border border-gray-300 rounded"/>
                  </td>
                </tr>
                <tr>
                  <td className="font-bold p-2">Email</td>
                  <td className="p-2">
                    <input type="email" className="w-full p-1 border border-gray-300 rounded" />
                  </td>
                </tr>
                <tr>
                  <td className="font-bold p-2">Address</td>
                  <td className="p-2">
                    <textarea type="text" className="w-full p-1 border border-gray-300 rounded" />
                  </td>
                </tr>
                <tr>
                  <td className="font-bold p-2">Insurance</td>
                  <td className="p-2">
                    <input type="text" className="w-full p-1 border border-gray-300 rounded" />
                  </td>
                </tr>               
              </tbody>
            </table>
            <div className='flex justify-between'>
              <button className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600">
                Save Changes
              </button>
              <button className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600">
                Edit
              </button>
            </div>
          </form>
          <div className='grid place-items-center mt-4font-bold '>
            <Link to='/home'>
              <button className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600">
                Go to Home page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </>
}

export default Dashboard
