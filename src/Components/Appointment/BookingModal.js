import React from 'react';

const BookingModal = ({ treatment }) => {
    const {name,slots} = treatment
    return (
        <div>
           <input type="checkbox" id="booking-modal-6" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
    <label for="booking-modal-6" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold text-center ">Booking For:
                        <span className='text-green-700'> {name} </span></h3>
                    
                    
    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
  </div>
</div>
        </div>
    );
};

export default BookingModal;