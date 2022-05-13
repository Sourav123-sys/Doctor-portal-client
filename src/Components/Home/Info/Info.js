import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../../assets/icons/clock.svg'
import marker from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'
const Info = () => {
    const title = <h1>Opening Hours</h1>
    const title1 = <h1>Visit Our Location</h1>
    const title2 = <h1>Contact Us</h1>
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mt-10 '>
        <InfoCard img={clock} title={title} bgClass = 'bg-gradient-to-r from-sky-500 to-indigo-500'></InfoCard>
        <InfoCard img={marker}title={title1} bgClass = 'bg-gradient-to-r from-violet-500 to-fuchsia-500'></InfoCard>
        <InfoCard img={phone}title={title2} bgClass = 'bg-gradient-to-r from-purple-500 to-pink-500'></InfoCard>
  
        </div>
    );
};

export default Info;