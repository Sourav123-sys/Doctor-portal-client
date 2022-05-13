import React from 'react';

const Service = ({ service,setTreatment }) => {
    const {name,slots} = service
    return (
        <div className="card lg:max-w-full bg-base-100 shadow-xl">
        <div className="card-body">
                <h2 className="font-bold text-2xl text-center text-green-700">{name}</h2>
                <p className='text-center'>{
                    slots.length
                        ? <span>{slots[0]} </span>
                        :<span className='text-red-700 font-medium'>Try another date</span>
                        
                
                }</p>
                <p className='font-bold text-center'>{slots.length} {slots.length >1 ? 'spaces available':'space available'} </p>
          <div className="card-actions justify-center">
                  
                    <label 
                    onClick={()=>setTreatment(service)}
                    disabled={slots.length === 0}
                        for="booking-modal-6" className="uppercase btn btn-secondary text-white">Book Appointment</label>
          </div>
        </div>
      </div>
    );
};

export default Service;