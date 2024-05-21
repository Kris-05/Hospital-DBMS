import React from 'react'
import ServiceCard from '../Services/ServiceCard';

function Services() {
  let servicesData = [
    {
      img: "https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/dermatology.svg",
      speciality: "Dermatology"
    },
    {
      img: "https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/gynecology.svg",
      speciality: "Gynecology"
    },
    {
      img: "https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/cardiology_icon.svg",
      speciality: "Cardiology",
    },
    {
      img: "https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/neurology.svg",
      speciality: "Neurology",
    },
    {
      img: "https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/ophthalmology.svg",
      speciality: "Ophthalmology",
    },
    {
      img: "https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/nephrology.svg",
      speciality: "Nephrology",
    },
    {
      img: "https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/pulmonology.svg",
      speciality: "Pulmonology",
    },
    {
      img: "https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/dentistry.svg",
      speciality: "Dentistry",
    },
    {
      img: "https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/ent.svg",
      speciality: "ENT",
    },
    {
      img: "https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/psychiatry.svg",
      speciality: "Psychiatry",
    },
    {
      img: "https://cdn.apollohospitals.com/apollohospitals/assets/icons/Angioplasty.svg",
      speciality: "Angioplasty",
    },
    {
      img: "https://cdn.apollohospitals.com/apollohospitals/assets/icons/Thyroidectomy.svg",
      speciality: "Thyroidectomy",
    },
    {
      img: "	https://cdn.apollohospitals.com/apollohospitals/assets/icons/endoscopy_icon.svg",
      speciality: "Endoscopy",
    },
    {
      img: "	https://cdn.apollohospitals.com/apollohospitals/assets/icons/cholecystectomy_icon.svg",
      speciality: "Cholecystectomy",
    },
    {
      img: "https://cdn.apollohospitals.com/apollohospitals/assets/icons/cataract_icon.svg",
      speciality: "Cataract",
    },
    {
      img: "https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/plasticsurgery.svg",
      speciality: "Palstic Surgery",
    },
    {
      img: "https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/radiology.svg",
      speciality: "Radiology",
    },
    {
      img: "https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/neonatology.svg",
      speciality: "Neonatology",
    },
    {
      img: "https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/urology.svg",
      speciality: "Urology",
    },
    {
      img: "https://cdn.apollohospitals.com/apollohospitals/assets/icons/Surgery_Stroke.svg",
      speciality: "Brain Tumor",
    }
    
  ];

  return <>
    <section id="Services" className='relative flex flex-row bg-red-300 w-screen h-screen'>
       
        <div className='flex-1'>
          <div className='wrapper'>
            <div className='grid place-items-center'>
              {/* <div className='shadow-xl shadow-indigo-500/40 bg-gray-300 rounded-lg px-7 py-2'>!--- Meet our Doctors ---!</div> */}
              <div className='h-20'></div>
              <div className='text-4xl'><strong>Explore our Centres of Clinical Excellence</strong></div>
            </div>
          </div>
          <div className='h-8'></div>
          <div className='grid grid-cols-5 m-6 gap-5'> 
          {
            servicesData.map((e,i)=>{
                return <ServiceCard key={i}
                  img={e.img}
                  about={e.speciality}
                />
            })
        }
          </div>
        </div>
        <div className='w-1/3'>
        </div>
        {/* Waves */}
        <div className="services-wave absolute bottom-0 left-0">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
        </svg>
      </div>
    </section>
  </>
}

export default Services
