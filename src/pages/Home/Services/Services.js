import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
     const [service, setService] = useState([]);
     useEffect(() => {
          fetch('services.json')
               .then(res => res.json())
               .then(data => setService(data))
     }, [])
     return (
          <div className='mt-10'>
               <div className='text-center '>
                    <p className='text-2xl text-orange-600 font-bold'>Services</p>
                    <p className='text-5xl font-bold'>Our service area</p>
                    <p className='mb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur  <br />excepturi amet dolor? Obcaecati, esse amet.</p>
               </div>
               <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    {
                         service.map(srv => <ServiceCard
                              key={srv._id}
                              service={srv}
                         ></ServiceCard>)
                    }
               </div>
               <div className='text-center my-5'><button className='btn btn-outline btn-warning'>More services</button></div>
          </div>
     );
};

export default Services;