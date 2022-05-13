import React from 'react';
import Banner from './Banner/Banner';
import Exceptional from './Exceotional/Exceptional';
import Info from './Info/Info';
import MkAppointment from './MakeAppointment/MkAppointment';
import Services from './Services/Services';
import Testomonial from './Testimonial/Testimonial'
import ContactForm from './Contact-form/ContactForm';
import Footer from '../Footer/Footer';
const Home = () => {
    return (
        <div className='px-12'>
            <Banner />
            <Info ></Info>
            <Services></Services>
            <Exceptional></Exceptional>
            <MkAppointment />
            <Testomonial></Testomonial>
            <ContactForm />
            <Footer/>
        </div>
    );
};

export default Home;
