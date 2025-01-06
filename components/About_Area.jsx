import React from 'react'
import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";
const About_Area = () => {
    return (
        <>
            <section className="about-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="about-img">
                                <img src="/assets/images/about1.jpg" alt="" />
                            </div>
                        </div>
                        <div className="col-md-6">

                            <div className="content-area">
                                <h3>know About Astrologer</h3>
                                <p>
                                    Astrology is the ancient study of how celestial bodies like stars, planets, and the moon influence human life and the natural world. It offers insights into personality traits, relationships, and life paths through the interpretation of planetary positions at the time of one’s birth. With tools like zodiac signs, horoscopes, and natal charts, astrology provides guidance on how to align with cosmic energies.
                                </p>

                                <p>
                                    Many people turn to astrology to find clarity, navigate challenges, or understand their purpose. It bridges the spiritual and the practical, connecting individuals to the universe. Whether you seek answers or personal growth, astrology opens a window to self-discovery. Explore its mysteries and uncover what the stars say about you.
                                </p>
                                <Link href="/about" className="as_btn">Read More</Link>

                                <div className="as_contact_expert">
                                    <span className="as_icon">
                                        <FaPhoneAlt />
                                    </span>
                                    <div>
                                        <h5 className="as_white">Contact Our Expert Astrologers</h5>
                                        <Link href="tel:+917717292608" className="as_orange">+91-7717292608</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About_Area