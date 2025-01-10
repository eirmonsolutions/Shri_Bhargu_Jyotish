import React from 'react';
import Link from 'next/link';
import { FaPhone, FaEnvelope } from "react-icons/fa6";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { BiSolidPhoneCall } from "react-icons/bi";
const Footer = () => {
    return (
        <>
            <footer className='tf_footer'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-3">
                            <div className="footer-box">
                                <Link href='/'><img src="/assets/images/logo.png" alt="Logo" loading='lazy' /></Link>
                                <p>Your daily astrological forecast, guided by Ved Parkash Shastri, helps you align with cosmic energies, offering direction for your actions and decisions.</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-2">
                            <div className="footer-box">
                                <h3>Explore Links</h3>
                                <ul>
                                    <li><Link href="/">Home</Link></li>
                                    <li><Link href="/about">About Us</Link></li>
                                    <li><Link href="/services">Services</Link></li>
                                    <li><Link href="/contact">Contact Us</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="footer-box">
                                <h3>Our Services</h3>
                                <ul>
                                    <li><Link href="/love-problem-solution">Love Problem Solution</Link></li>
                                    <li><Link href="/one-side-love-solution">One Side Love Solution</Link></li>
                                    <li><Link href="/breakup-problem">Breakup Problem</Link></li>
                                    <li><Link href="/ex-love-back">Ex Love Back</Link></li>
                                    <li><Link href="/family-dispute">Family Dispute</Link></li>
                                    <li><Link href="/grah-kalesh">Grah Kalesh</Link></li>
                                    <li><Link href="/love-marriage">Love Marriage</Link></li>
                                    <li><Link href="/business-problem-solution">Business Problem Solution</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="footer-box2">
                                <h3>Get In Touch</h3>
                                <ul>

                                    <li>
                                        <Link href="tel:+917717292608">
                                            <span className="icon"><FaPhone /></span>
                                            +91-7717292608
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="mailto:info@shribhargujyotish.com">
                                            <span className="icon"><FaEnvelope /></span>
                                            info@shribhargujyotish.com
                                        </Link>
                                    </li>
                                </ul>

                                <h3>Follow Us On</h3>
                                <ul className="top-social-media-icon">
                                    <li><Link href="https://www.facebook.com/shribhargujyotish" target="_blank" rel="noopener noreferrer"><FaFacebookF /></Link></li>
                                    <li><Link href="https://www.instagram.com/shribhargujyotish" target="_blank" rel="noopener noreferrer"><FaInstagram /></Link></li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </footer>

            <Link
                href="https://api.whatsapp.com/send?phone=+917717292608&text=Hello%20there!%20I%20would%20like%20to%20know%20more%20about%20your%20services."
                className="float"
                target="_blank"
            >
                <FaWhatsapp />
            </Link>

            <Link
                href="tel:+917717292608"
                className="float2"
                target="_blank"
            >
                <BiSolidPhoneCall />
            </Link>


            <div className="copyright-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="copyright-content">
                                <p>Copyright © 2024 | Shri Bhargu Jyotish Kendra | Design &amp; Development By <Link href="https://eirmonsolutions.com.au/" target="_blank" rel="noopener noreferrer">Eirmon Solutions</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;
