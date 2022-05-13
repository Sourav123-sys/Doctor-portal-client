import React from 'react';

const SingleService = (props) => {
    const { name, _id, slots,img } = props.send
    console.log(props.send)
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
        <figure class="px-10 pt-10">
          <img src={img} alt="no-found" class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">{name}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
         
        </div>
      </div>
    );
};

export default SingleService;