import { format } from 'date-fns';
import React from 'react';

const AvailableAppointment = ({date}) => {
    return (
        <div >
           <h1 className='mt-20 text-center font-bold text-secondary'> Available Appointment on:{format(date, 'PP')}</h1>
        </div>
    );
};

export default AvailableAppointment;