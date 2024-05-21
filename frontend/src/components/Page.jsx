import React from 'react'
import { useNavigate } from 'react-router-dom';

import Home from './Home-Page/Home';
import About from './Home-Page/About/About';
import Services from './Home-Page/Services/Services';
import Booking from './Home-Page/Rooms/Booking';
import Contact from './Home-Page/Contact';
import Navbar from './Home-Page/Navbar/Navbar';

function Page() {
  let navigate = useNavigate()

  return <>
    <Navbar/>
    <Home />
    <About />
    <Services />
    <Booking />
    <Contact />
  </>
}

export default Page

