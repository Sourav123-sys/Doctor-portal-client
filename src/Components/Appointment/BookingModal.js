import React from 'react';
import { format } from 'date-fns';
const BookingModal = ({ treatment, date,setTreatment }) => {
    const { name, slots } = treatment

    const handleBooking = e => {
        
        e.preventDefault();
        const slot = e.target.slot.value
        const date = e.target.date.value
        const name = e.target.name.value
        const email= e.target.email.value
        const phone = e.target.phone.value
        console.log(slot, name, email, phone, date);
        setTreatment(null)  
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal-6" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal-6" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold text-center ">Booking For:
                        <span className='text-green-700'> {name} </span></h3>


                    <form className='grid grid-cols-1 gap-5 justify-items-center mt-5' onSubmit={handleBooking}>

                        <input name='date'type="text" disabled value={format(date, 'PP')} className="input input-bordered w-full max-w-xs" />
                        <select name='slot' class="select select-bordered w-full max-w-xs">
                            {
                                slots?.map(slot => <option value={slot}>{slot}</option>)
                           }
                        
                        </select>
                        <input type="text"name='email' placeholder="enter your email" className="input input-bordered w-full max-w-xs" />
                        <input type="text"name='name' placeholder="enter your name" className="input input-bordered w-full max-w-xs" />
                        <input type="number"name='phone' placeholder="enter your phone" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="Submit" className="
                    
                    btn btn-secondary
                    w-full max-w-xs" />


                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;