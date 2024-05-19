import React,{useState} from 'react'
import BookingRoom from './BookingRoom'
import img1 from '../../../assets/images/comfortRoom.jpg'
import img2 from '../../../assets/images/deluxeRoom.jpg'
import img3 from '../../../assets/images/superDeluxeRoom.jpg'
import img4 from '../../../assets/images/placeholder.jpg'

function Booking() {
  let [type,setType] = useState("")

  let comfortRoom = [
    {
      roomNo: 1,
      isBooked: true
    },
    {
      roomNo: 2,
      isBooked: false
    },
    {
      roomNo: 3,
      isBooked: true
    },
    {
      roomNo: 4,
      isBooked: false
    },
    {
      roomNo: 5,
      isBooked: true
    },
    {
      roomNo: 6,
      isBooked: true
    },
    {
      roomNo: 7,
      isBooked: true
    },
    {
      roomNo: 8,
      isBooked: true
    },
    {
      roomNo: 9,
      isBooked: false
    },
    {
      roomNo: 10,
      isBooked: false
    },
    {
      roomNo: 11,
      isBooked: false
    },
    {
      roomNo: 12,
      isBooked: false
    },
    {
      roomNo: 13,
      isBooked: false
    },
    {
      roomNo: 14,
      isBooked: true
    },
    {
      roomNo: 15,
      isBooked: false
    },
    {
      roomNo: 16,
      isBooked: false
    },
    {
      roomNo: 17,
      isBooked: true
    },
    {
      roomNo: 18,
      isBooked: true
    },

    {
      roomNo: 19,
      isBooked: false
    },
    {
      roomNo: 20,
      isBooked: false
    }
  ]
  let deluxeRoom = [
    {
      roomNo: 1,
      isBooked: true
    },
    {
      roomNo: 2,
      isBooked: false
    },
    {
      roomNo: 3,
      isBooked: true
    },
    {
      roomNo: 4,
      isBooked: false
    },
    {
      roomNo: 5,
      isBooked: true
    },
    {
      roomNo: 6,
      isBooked: true
    },
    {
      roomNo: 7,
      isBooked: true
    },
    {
      roomNo: 8,
      isBooked: true
    },
    {
      roomNo: 9,
      isBooked: false
    },
    {
      roomNo: 10,
      isBooked: false
    }
  ]
  let superDeluxeRoom = [
    {
      roomNo: 1,
      isBooked: true
    },
    {
      roomNo: 2,
      isBooked: false
    },
    {
      roomNo: 3,
      isBooked: true
    },
    {
      roomNo: 4,
      isBooked: false
    },
    {
      roomNo: 5,
      isBooked: true
    },
    {
      roomNo: 6,
      isBooked: true
    },
    {
      roomNo: 7,
      isBooked: true
    },
    {
      roomNo: 8,
      isBooked: true
    },
    {
      roomNo: 9,
      isBooked: false
    },
    {
      roomNo: 10,
      isBooked: false
    }
  ]

  let comfort = {
    image: img1,
    price: 20000,
    Desc: "Comfort and care within reach. Our Ordinary Rooms offer essential amenities and a serene environment to ensure a smooth recovery."
  }
  let deluxe = {
    image: img2,
    price: 40000,
    Desc: "Experience enhanced comfort in our Deluxe Rooms. Enjoy additional space, premium amenities, and personalized care for your healing journey."
  }
  let superDeluxe = {
    image: img3,
    price: 70000,
    Desc: "Indulge in the ultimate in patient care with our Super Deluxe Rooms. Featuring luxurious furnishings, state-of-the-art facilities, and dedicated service to support your health and well-being."
  }

  return <>
    <section id="Booking" className='relative flex bg-teal-300 w-screen h-screen'>
      <div className='w-5/12 grid place-items-center'>
      <div className='h-20'></div>
        <div class="p-4  max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className='grid place-items-center'>
              <span className='py-3 px-6 mb-2 bg-violet-300 rounded-lg'>PREVIEW</span>
            </div>
            <img className='rounded-lg' 
            src={type==="Comfort"?comfort.image:(type==="Deluxe"?deluxe.image:(type==="SuperDeluxe"?superDeluxe.image:img4))} 
            alt="" />
            <div class="p-5">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  PRICE: &#x20B9; 
                  {type==="Comfort"?comfort.price:(type==="Deluxe"?deluxe.price:(type==="SuperDeluxe"?superDeluxe.price:NaN))}
                </h5>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {type==="Comfort"?comfort.Desc:(type==="Deluxe"?deluxe.Desc:(type==="SuperDeluxe"?superDeluxe.Desc:"Description"))}
                </p>
                <div class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Proceed to Book
                    <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </div>
            </div>
            <div>
              Click on a room to see its preview <br/> <strong>NOTE:</strong> Images are subjected to 
            </div>
        </div>
      </div>
      <div className='flex-1'>
        <div className='wrapper'>
          <div className='grid place-items-center'>
            {/* <div className='shadow-xl shadow-indigo-500/40  bg-gray-300 rounded-lg px-7 py-2'>!--- Our Rooms ---!</div> */}
            <div className='h-24'></div>
            <div className='text-4xl'><strong>Choose the Room that best suits you!</strong></div>
            <br></br>
            <div>Make your own little world inside</div>
          </div>
        </div>
        <div className='h-8'></div>
        <div>
          <div className='h-5/12 w-11/12 bg-white rounded-xl flex flex-col'> 
            <div id="Comfort" className='flex-1 border border-gray-700 rounded-lg m-5' onClick={(e)=>{setType("Comfort");console.log(type)}}>
               <h5 className='text-center my-6'>COMFORT</h5>
               <div className='grid grid-cols-10'>
                {
                  comfortRoom.map((e,i)=>{
                      return <BookingRoom key={i}
                        roomNo = {e.roomNo}
                        isBooked = {e.isBooked}
                      />
                  })
                }      
                </div>
            </div>
            <div className='flex-1'>
            <div className='flex'>
                <div id="Deluxe" className='flex-1 border border-gray-700 rounded-lg my-5 mx-2' onClick={(e)=>{setType("Deluxe");console.log(type)}}>
                  <h5 className='text-center my-6'>DELUXE</h5>
                  <div className='grid grid-cols-5'>
                    {
                      deluxeRoom.map((e,i)=>{
                          return <BookingRoom key={i}
                            roomNo = {e.roomNo}
                            isBooked = {e.isBooked}
                          />
                      })
                    }      
                  </div>
                </div>
                <div id="Super Deluxe" className='flex-1 border border-gray-700 rounded-lg my-5 mx-2' onClick={(e)=>{setType("SuperDeluxe");console.log(type)}}>
                  <h5 className='text-center my-6'>SUPER DELUXE</h5>
                  <div className='grid grid-cols-5'>
                    {
                      superDeluxeRoom.map((e,i)=>{
                          return <BookingRoom key={i}
                            roomNo = {e.roomNo}
                            isBooked = {e.isBooked}
                          />
                      })
                    }      
                  </div>
                </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
}

export default Booking
