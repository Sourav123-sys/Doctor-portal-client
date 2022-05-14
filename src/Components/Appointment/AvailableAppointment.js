import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Spinner from '../Spinner/Spinner';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppointment = ({ date }) => {
    //const [services, setServices] = useState([])
    const [treatment, setTreatment] = useState({})
    const FormateDate = format(date, "PP")
    // react query
    const {data:services,isLoading,refetch}= useQuery(['available',FormateDate], () =>
    fetch(`http://localhost:4000/available?date=${FormateDate}`)
            .then(res => res.json())
        
        
    )

    if (isLoading) {
        return <Spinner/>
    }
    // useEffect(() => {
        
    //     fetch(`http://localhost:4000/available?date=${FormateDate}`)
    //         .then(res => res.json())
    //     .then(data=>setServices(data))
    // }, [FormateDate])
    
    
    return (
        <div >
            <h1 className='mt-20 text-center font-bold text-secondary'> Available Appointment on: {format(date, 'PP')}</h1>
            
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center   gap-2 mt-10 pb-20'>
                {
                    services?.map(service => <Service
                        key={service._id}
                        service={service}
                        
                        setTreatment={setTreatment}
                    >
                        

                    </Service>)
                }
            </div>
            {treatment && <BookingModal
                treatment={treatment}
                setTreatment={setTreatment}
                date={date}
                refetch={refetch}
            ></BookingModal>}
        </div>
    );
};

export default AvailableAppointment;