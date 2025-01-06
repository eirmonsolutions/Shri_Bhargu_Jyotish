"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaAngleDown } from "react-icons/fa6";
import { CgMenuRightAlt } from "react-icons/cg";



const Navbar = () => {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // Function to handle dropdown toggle for mobile
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    return (
        <>

            <section className="top-bar-area">
                <div className="container-fluid p-0">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="main-top">
                                <h4>Tell Us Your Problem & Get Assured Results <Link href="tel:+917717292608">+91-7717292608</Link> (Available on Call & WhatsApp)</h4>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <header className="navbar-main">
                <nav className="navbar-expand-lg">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-12 col-lg-3">
                                <div className="logo-area">
                                    <Link className="navbar-brand" href="/">
                                        <img src="/assets/images/logo.png" alt="Logo" />
                                    </Link>
                                    <button
                                        className="navbar-toggler"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#navbarSupportedContent"
                                        aria-controls="navbarSupportedContent"
                                        aria-expanded="false"
                                        aria-label="Toggle navigation"
                                    >
                                        <CgMenuRightAlt />
                                    </button>
                                </div>
                            </div>

                            <div className="col-md-12 col-lg-6">
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav">
                                        <li className="nav-item">
                                            <a className="nav-link active" aria-current="page" href="/">
                                                Home
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" href="/about">
                                                About Us
                                            </Link>
                                        </li>

                                        <li className="nav-item" onClick={toggleDropdown}>
                                            <Link className="nav-link" href="/services" >
                                                Services
                                            </Link>
                                            <span className="navbar-dropdown-icon"><FaAngleDown /></span>

                                            <ul className={`dropdown-area ${isDropdownOpen ? 'show' : ''}`}>
                                                <li>
                                                    <Link className="dropdown-item" href="/love-problem-solution">
                                                        Love Problem Solution
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link className="dropdown-item" href="/one-side-love-solution">
                                                        One Side Love Solution
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link className="dropdown-item" href="/breakup-problem">
                                                        Breakup Problem
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link className="dropdown-item" href="/ex-love-back">
                                                        Ex Love Back
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link className="dropdown-item" href="/family-dispute">
                                                        Family Dispute
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link className="dropdown-item" href="/grah-kalesh">
                                                        Grah Kalesh
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link className="dropdown-item" href="/child-problem">
                                                        Child Problem
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link className="dropdown-item" href="/love-marriage">
                                                        Love Marriage
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link className="dropdown-item" href="/job-problem-solution">
                                                        Job Problem Solution
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link className="dropdown-item" href="/business-problem-solution">
                                                        Business Problem Solution
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link className="dropdown-item" href="/extra-marital-affair">
                                                        Extra Marital Affair
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link className="dropdown-item" href="/husband-wife-dispute">
                                                        Husband Wife Dispute
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link className="dropdown-item" href="/black-magic-removal">
                                                        Black Magic Removal
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link className="dropdown-item" href="/negative-energy-removal">
                                                        Negative Energy Removal
                                                    </Link>
                                                </li>
                                            </ul>

                                        </li>

                                        <li className="nav-item">
                                            <Link className="nav-link" href="/contact">
                                                Contact Us
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="navbar-btn-area d-none d-lg-block">
                                <Link href="tel:+917717292608" className="as_btn">Call +91-7717292608</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>

        </>
    )
}

export default Navbar