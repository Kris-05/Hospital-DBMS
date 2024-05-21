import React from 'react'

function ServiceCard({img,about}) {
  return <>
    <div className='flex items-center justify-center z-10'>
      <div className='shadow-2xl bg-white rounded-xl p-3 h-28 w-36'>
          <div className='grid place-items-center'>
            <img src={img} />
          </div>
          <h6 className='text-gray-500 text-center'>{about}</h6>
        </div>
    </div> 
  </>
}

export default ServiceCard
