import React, { useEffect, useState } from 'react';
import flowrite from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'
import SingleService from './SingleService';
const Services = () => {
 
    const service = [
        {
            "img":flowrite,
          "_id": 1,
          "name": "Teeth Orthodontics",
          "slots": [
            "08.00 AM - 08.30 AM",
            "08.30 AM - 09.00 AM",
            "09.00 AM - 9.30 AM",
            "09.30 AM - 10.00 AM",
            "10.00 AM - 10.30 AM",
            "10.30 AM - 11.00 AM"
          ]
        },
        {
            "img":cavity,
          "_id": 2,
          "name": "Cosmetic Dentistry",
          "slots": [
            "09.00 AM - 9.30 AM",
            "09.30 AM - 10.00 AM",
            "10.00 AM - 10.30 AM",
            "10.30 AM - 11.00 AM"
          ]
        },
        {
            "img":whitening,
          "_id": 3,
          "name": "Teeth Cleaning",
          "slots": []
        },
      
    ]
    return (
        <div className= 'my-28'>
            <div className='text-center '>
                <h3 className='text-primary text-xl font-bold uppercase'>Our Services</h3>
                <h2 className='text-5xl'>Services We Provide</h2>
            </div>
            
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    service.map(serv => <SingleService
                    key={serv._id}
                    send={serv}
                    ></SingleService>
                    
                    )
                }
                
            </div>
        </div>
    );
};

export default Services;