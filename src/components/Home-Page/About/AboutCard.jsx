import React from 'react'

function AboutCard({img,count,content}) {
  return <>
    <div class="z-10 shadow-2xl flex flex-row gap-2 max-w-sm p-6 bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
    <div className='flex items-center justify-center'>
        {img}
    </div>
        <div className='flex flex-col'>
            <div className='text-green-600 text-xl'><strong>{count}</strong></div>
            <div className='text-sm'>{content}</div>
        </div>
    </div>
  </>
}

export default AboutCard
