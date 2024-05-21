import React from 'react'
import './Wave.css'

function Home() {
  return <>
    <section id="Home" className='relative flex bg-green-300 w-screen h-screen'>
        <div className='flex-1 grid place-items-center'>
        <span className='flex flex-col gap-8'>
            <div className='text-7xl'>The future of <br></br> <strong className='text-green-800'>HealthCare</strong> </div>
            <div className='text-xl'>Our commitment to pioneering innovations is <br></br> revolutionizing the landscape of wellness</div>
        </span>
        </div>
        {/* Waves */}
        <div className="home-waves">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
        </svg>
        </div>
        <div className='flex-1'>
        
        </div>
        <div className='absolute bottom-5 left-5 right-5'>
            <nav id="navbar" className="flex flex-row justify-evenly bg-white dark:bg-gray-900 w-full z-20 border-b border-gray-200 dark:border-gray-600 ">
                <div className='flex h-20 font-roboto text-2xl justify-center items-center'>GOOGLE</div>
                <div className='flex h-20 font-acme text-2xl justify-center items-center'>Jhonson&Jhonson</div>
                <div className='flex h-20 font-poetsen text-2xl justify-center items-center'>Meta</div>
                <div className='flex h-20 font-chakra text-2xl justify-center items-center'>Allianz</div>
                <div className='flex h-20 font-roman text-2xl justify-center items-center'>Unicef</div>
            </nav>
        </div>       
    </section>
  </>
}

export default Home
