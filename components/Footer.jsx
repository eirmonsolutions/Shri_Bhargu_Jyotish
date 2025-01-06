import React from 'react';
import Link from 'next/link';
import {  FaPhone, FaEnvelope } from "react-icons/fa6";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
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
                                    <li><Link href="/">Love Problem Solution</Link></li>
                                    <li><Link href="/">One Side Love Solution</Link></li>
                                    <li><Link href="/">Breakup Problem</Link></li>
                                    <li><Link href="/">Ex Love Back</Link></li>
                                    <li><Link href="/">Family Dispute</Link></li>
                                    <li><Link href="/">Grah Kalesh</Link></li>
                                    <li><Link href="/">Love Marriage</Link></li>
                                    <li><Link href="/">Business Problem Solution</Link></li>
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
                                        <Link href="mailto:info@logo.com">
                                            <span className="icon"><FaEnvelope /></span>
                                            infologo.com
                                        </Link>
                                    </li>
                                </ul>

                                <h3>Follow Us On</h3>
                                <ul className="top-social-media-icon">
                                    <li><Link href="https://www.facebook.com/profile.php?id=100081280647173&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer"><FaFacebookF /></Link></li>
                                    <li><Link href="https://www.instagram.com/shri_bhragu?igsh=NWtwbjVzNmU1bWkw" target="_blank" rel="noopener noreferrer"><FaInstagram /></Link></li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </footer>

            <div className="copyright-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="copyright-content">
                                <p>Copyright © 2024 | Website Name | Design &amp; Development By <Link href="https://eirmonsolutions.com.au/" target="_blank" rel="noopener noreferrer">Eirmon Solutions</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;
