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
                  t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it esdehas a more-or less normal distribution of letters,
                </p>

                <p>
                  As opposed to using 'Content here, content here', making it look likesdesdee readable English.Many desktop publishing packages and web page editors sdesnow use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will usdencover many web sites still in their web page editors sdesnow infancy.
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