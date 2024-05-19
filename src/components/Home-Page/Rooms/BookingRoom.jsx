import React from 'react'

function BookingRoom({roomNo,isBooked}) {
    return isBooked? <>
            <div className='mx-5 my-2 grid place-items-center h-12 w-12 border-2 rounded-lg border-gray-500 bg-gray-300'>
                <p className=''>{roomNo}</p>  
            </div>
        </>:<>
            <div className='mx-5 my-2 grid place-items-center h-12 w-12 border-2 rounded-lg border-green-500 hover:bg-green-300'>
                <p className=''>{roomNo}</p>  
            </div>
        </>
}

export default BookingRoom
