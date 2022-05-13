import React from 'react';
import quote from '../../../assets/icons/quote.svg'
import image from '../../../assets/images/people1.png'
import image2 from '../../../assets/images/people2.png'
import image3 from '../../../assets/images/people3.png'
import Card from './Card';
const Testimonial = () => {
    const reviews = [

        {
            _id: 1,
            name: 'Winson Harry',
            review: 'Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.',
            img: image,
            location:"California",
},
        {
            _id: 2,
            name: ' Harry',
            review: 'Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.',
            img: image2,
            location:"California",
},
        {
            _id: 3,
            name: 'William Harry',
            review: 'Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.',
            img: image3,
            location:"California",
},



    ]
    return (
        <section className='my-28'>

            <div className='flex justify-between'>

                <div>
                    <h4 className='text-xl text-primary font-bold'>Testomonials</h4>
                    <h2 className='text-3xl'>What Our Patients Say</h2>


                </div>
                <div>

                    <img className='lg:w-48 w-24'src={quote} alt='' />
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
{
                    reviews.map(review => <Card
                    
                        key={review._id}
                        send={review}
                    >
                 
        </Card>)
}

            </div>
        </section>
    );
};

export default Testimonial;
