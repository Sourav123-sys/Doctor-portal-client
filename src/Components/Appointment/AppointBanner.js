import React from 'react';
import image from '../../assets/images/chair.png'

import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
//import { format } from 'date-fns';
const AppointBanner = ({ date, setDate }) => {

    return (
        <div className="hero min-h-screen mt-10 ">
            <div className="hero-content grid grid-cols-1 md:grid-cols-2 gap-5 justify-items-center">
                <img src={image} className="w-full  rounded-lg shadow-2xl" alt='' />
                <div>
                    <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        required
                    />

                </div>
            </div>

        </div>
    );
};

export default AppointBanner;
