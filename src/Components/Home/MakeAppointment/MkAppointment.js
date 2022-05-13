import React from 'react';
import image from '../../../assets/images/doctor.png'
import image2 from '../../../assets/images/appointment.png'
import PrimaryButton from '../PrimaryButton/PrimaryButton';
const MkAppointment = () => {
    return (
        <section style={{

            background:`url(${image2})`
        }} className='flex justify-center items-center mt-10'>
            <div className='flex-1 hidden lg:block'>

                <img src={image} className='mt-[-130px]' alt='' />
            </div>


            <div className='flex-1 px-5'>

                <h3 className='text-xl text-primary font-bold'>Appointment</h3>
                <h2 className='text-3xl text-white py-5'>Make a Appointment Today</h2>
                <p className='text-white pb-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae quo excepturi eius sapiente vero voluptates fugiat in quas sunt iure perferendis veritatis dignissimos necessitatibus ea ratione itaque, labore debitis cupiditate reiciendis id! Blanditiis, ad. Assumenda voluptatum facilis totam distinctio amet?</p>
                <PrimaryButton >Get started</PrimaryButton>
            </div>
        </section >
    );
};

export default MkAppointment;