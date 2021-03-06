import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../assets/images/footer.png'
const Footer = () => {
    return (
        <footer
            style={{
                background: `url(${image})`,
                backgroundSize: 'cover'
            }}
            className=" p-10 mt-10 ">
            <div className='footer'>
                <div>
                    <span className="footer-title">Services</span>
                    <Link to='#' className="link link-hover">Branding</Link>
                    <Link to='#' className="link link-hover">Design</Link>
                    <Link to='#' className="link link-hover">Marketing</Link>
                    <Link to='#' className="link link-hover">Advertisement</Link>
                </div> 
                <div> 
                    <span to='#' className="footer-title">Company</span>
                    <Link to='#' className="link link-hover">About us</Link>
                    <Link to='#' className="link link-hover">Contact</Link>
                    <Link to='#' className="link link-hover">Jobs</Link>
                    <Link to='#' className="link link-hover">Press kit</Link>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <Link to='#' className="link link-hover">Terms of use</Link>
                    <Link to='#' className="link link-hover">Privacy policy</Link>
                    <Link to='#' className="link link-hover">Cookie policy</Link>
                </div>
            </div>


   

            <div className='my-10 text-center text-yellow-700 font-bold'>
                <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
            </div>

        </footer>
    );
};

export default Footer;