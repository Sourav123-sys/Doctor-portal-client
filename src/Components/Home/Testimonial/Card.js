import React from 'react';

const Card = props => {
    const { _id, name, review, img, location } = props.send
    console.log(props.send);
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body">
                {/* <h2 className="card-title">{name}</h2>
                <p className='text-xl '>{location}</p> */}
                <p>{review}</p>
                <div className="flex items-center">
                    <div className="avatar">
                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                            <img src={img} alt='' />

                          


                        </div>


                    </div>
                    <div>
                                <h4 className='text-xl text-black'>{name}</h4>
                                <p className='text-xl text-black'>{location}</p>
                            </div>
                </div>
            </div>
        </div>

    );
};

export default Card;