import React from 'react';
import image from '../../../assets/images/treatment.png'
const Exceptional = () => {
    return (
        <div className="hero min-h-screen bg-white">
  <div className="hero-content flex-col lg:flex-row">
    <img src={image} className="max-w-sm rounded-lg shadow-2xl" alt='' />
    <div className='pl-10'>
      <h1 className="text-5xl font-bold">Exceptional Dental <br/> Care,On Your Terms</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default Exceptional;