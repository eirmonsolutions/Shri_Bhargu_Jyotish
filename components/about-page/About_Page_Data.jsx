import React from 'react';
import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";
const About_Page_Data = () => {
  return (
    <>

      <section className="about-area">
        <div className="container">
          <div className="row">

            <div className="col-md-6">

              <div className="content-area">
                <h3>know about Astrology</h3>
                <p>
                  Ved Parkash Shastri is a renowned astrologer specializing in providing effective solutions for a wide range of life problems. Whether you're facing love issues, family conflicts, business struggles, or trying to bring back a lost relationship, his expert guidance brings clarity and resolution. His services include Love Problem Solution, One Side Love Solution, Ex Love Back, Breakup Problem, Family Dispute, Grah Kalesh, Love Marriage, and Business Problem Solution.
                </p>

                <p>
                  With deep knowledge of Vedic astrology, Ved Parkash Shastri helps you align with cosmic energies, resolve challenges, and create a harmonious, prosperous life. Trust his expertise to guide you toward happiness, success, and peace in all aspects of life.
                </p>

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
            <div className="col-md-6">
              <div className="about-img">
                <img src="/assets/images/about1.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default About_Page_Data